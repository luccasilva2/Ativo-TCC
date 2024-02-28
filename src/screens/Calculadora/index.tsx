import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

interface Operators {
  clearEntry: string;
  clear: string;
  backspace: string;
  decimal: string;
  sign: string;
  add: string;
  subtract: string;
  multiply: string;
  divide: string;
  equals: string;
}

const operators: Operators = {
  clearEntry: 'CE',
  clear: 'C',
  backspace: '⌫',
  decimal: '.',
  sign: '±',
  add: '+',
  subtract: '−',
  multiply: '×',
  divide: '÷',
  equals: '=',
};

interface CalcState {
  stackValue: number;
  pendingOperator: string;
  decimalPressed: boolean;
  showingPreviousResult: boolean;
}

const calc: CalcState = {
  stackValue: NaN,
  pendingOperator: '',
  decimalPressed: false,
  showingPreviousResult: false,
};

const CalcButton = ({ name, onPress }: { name: string; onPress: (name: string) => void }) => (
  <TouchableHighlight
    style={[
      styles.button,
      !isNaN(Number(name)) && styles.buttonNumeric,
    ]}
    onPress={() => onPress(name)}>
    <Text style={styles.buttonText}>{name}</Text>
  </TouchableHighlight>
);

const Calculadora = () => {
  const [displayText, setDisplayText] = useState<string>('0');
  const navigation = useNavigation();

  const buttonPress = (btn: string) => {
    let text = displayText;

    if (btn === operators.clearEntry) {
      clearEntry();
    } else if (btn === operators.clear) {
      calc.stackValue = NaN;
      calc.pendingOperator = '';
      clearEntry();
    } else if (btn === operators.backspace) {
      if (calc.decimalPressed) {
        calc.decimalPressed = false;
      } else {
        if (isFinite(Number(text))) {
          text = text.substring(0, text.length - 1);

          if (text.length === 0) {
            text = '0';
          } else if (text.endsWith(operators.decimal)) {
            text = text.substring(0, text.length - 1);
          }

          setDisplayText(text);
        }
      }
    } else if (btn === operators.decimal) {
      if (isFinite(Number(text))) {
        if (!calc.decimalPressed && !text.includes(operators.decimal)) {
          calc.decimalPressed = true;
        }
      }
    } else if (btn === operators.sign) {
      if (isFinite(Number(text))) {
        let num = Number(text);
        num *= -1.0;
        setDisplayText(String(num));
      }
    } else if (
      btn === operators.add ||
      btn === operators.subtract ||
      btn === operators.multiply ||
      btn === operators.divide
    ) {
      if (isFinite(Number(text))) {
        computeAndUpdate(btn);
        setDisplayText(String(calc.stackValue));
      }
    } else if (btn === operators.equals) {
      if (isFinite(Number(text))) {
        computeAndUpdate(btn);
        setDisplayText(String(calc.stackValue));
        calc.stackValue = NaN;
      }
    } else if (!isNaN(Number(btn))) {
      if (isFinite(Number(text))) {
        if (calc.showingPreviousResult) {
          text = '0';
          calc.showingPreviousResult = false;
        }

        if (calc.decimalPressed) {
          text += '.';
          calc.decimalPressed = false;
        }

        // Substituir o zero inicial quando um novo número é digitado
        if (text === '0') {
          text = btn;
        } else {
          text += btn;
        }

        setDisplayText(text);
      }
    } else {
      // Error
    }
  };

  const clearEntry = () => {
    calc.decimalPressed = false;
    calc.showingPreviousResult = false;
    setDisplayText('0');
  };

  const computeAndUpdate = (nextOperator: string) => {
    if (!isNaN(calc.stackValue)) {
      let o1 = calc.stackValue;
      const o2 = Number(displayText);

      if (calc.pendingOperator === operators.add) {
        o1 = o1 + o2;
      } else if (calc.pendingOperator === operators.subtract) {
        o1 = o1 - o2;
      } else if (calc.pendingOperator === operators.multiply) {
        o1 = o1 * o2;
      } else if (calc.pendingOperator === operators.divide) {
        o1 = o1 / o2;
      }

      calc.stackValue = o1;
    } else {
      const num = Number(displayText);
      calc.stackValue = num;
    }
    calc.pendingOperator = nextOperator;
    calc.showingPreviousResult = true;
  };

  return (
    <LinearGradient colors={['#808080', '#000']} style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../../../assets/flecha.png')} style={styles.imageflecha} />
      </TouchableOpacity>
      <View style={styles.calculatorContainer}>
        <View style={styles.textRow}>
          <Text style={styles.text}>{displayText}</Text>
        </View>
        <View style={styles.buttonRow}>
          <CalcButton
            name={operators.clearEntry}
            onPress={buttonPress}
          />
          <CalcButton
            name={operators.clear}
            onPress={buttonPress}
          />
          <CalcButton
            name={operators.backspace}
            onPress={buttonPress}
          />
          <CalcButton
            name={operators.divide}
            onPress={buttonPress}
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton name="7" onPress={buttonPress} />
          <CalcButton name="8" onPress={buttonPress} />
          <CalcButton name="9" onPress={buttonPress} />
          <CalcButton
            name={operators.multiply}
            onPress={buttonPress}
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton name="4" onPress={buttonPress} />
          <CalcButton name="5" onPress={buttonPress} />
          <CalcButton name="6" onPress={buttonPress} />
          <CalcButton
            name={operators.subtract}
            onPress={buttonPress}
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton name="1" onPress={buttonPress} />
          <CalcButton name="2" onPress={buttonPress} />
          <CalcButton name="3" onPress={buttonPress} />
          <CalcButton name={operators.add} onPress={buttonPress} />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton
            name={operators.sign}
            onPress={buttonPress}
          />
          <CalcButton name="0" onPress={buttonPress} />
          <CalcButton
            name={operators.decimal}
            onPress={buttonPress}
          />
          <CalcButton
            name={operators.equals}
            onPress={buttonPress}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  calculatorContainer: {
    width: 350, // ajuste conforme necessário
    height: 500, // ajuste conforme necessário
    backgroundColor: '#dddddd',
    borderRadius: 10,
    padding: 10,
  },
  textRow: {
    padding: 5,
    alignItems: 'flex-end',
  },
  text: {
    padding: 5,
    fontSize: 36,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  buttonNumeric: {
    backgroundColor: '#A9A9A9',
  },
  buttonText: {
    fontSize: 18,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 0,
    zIndex: 1,
  },
  imageflecha: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
});

export default Calculadora;
