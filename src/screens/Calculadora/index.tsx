import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const operators = {
  clearEntry: 'CE',
  clear: 'C',
  backspace: '⌫',
  decimal: '.',
  sign: '±',
  add: '+',
  subtract: '−',
  multiply: '×',
  divide: '÷',
  equals: ':',
};

const calc = {
  stackValue: NaN,
  pendingOperator: '',
  decimalPressed: false,
  showingPreviousResult: false,
};

class CalcButton extends React.Component<{ name: string, onPress: (name: string) => void }> {
  render() {
    return (
      <TouchableHighlight
        style={[
          styles.button,
          !isNaN(Number(this.props.name)) && styles.buttonNumeric,
        ]}
        onPress={() => this.props.onPress(this.props.name)}>
        <Text style={styles.buttonText}>{this.props.name}</Text>
      </TouchableHighlight>
    );
  }
}

export default class Calculadora extends React.Component {
  state = {
    displayText: '0',
  };

  buttonPress = (btn: string) => {
    let text = this.state.displayText;

    if (btn === operators.clearEntry) {
      this.clearEntry();
    } else if (btn === operators.clear) {
      calc.stackValue = NaN;
      calc.pendingOperator = '';
      this.clearEntry();
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

          this.setState({displayText: text});
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
        this.setState({displayText: String(num)});
      }
    } else if (
      btn === operators.add ||
      btn === operators.subtract ||
      btn === operators.multiply ||
      btn === operators.divide
    ) {
      if (isFinite(Number(text))) {
        this.computeAndUpdate(btn);
        this.setState({displayText: calc.stackValue});
      }
    } else if (btn === operators.equals) {
      if (isFinite(Number(text))) {
        this.computeAndUpdate(btn);
        this.setState({displayText: calc.stackValue});
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

        text += btn;
        this.setState({displayText: String(Number(text))});
      }
    } else {
      // Error
    }
  };

  clearEntry = () => {
    calc.decimalPressed = false;
    calc.showingPreviousResult = false;
    this.setState({displayText: '0'});
  };

  computeAndUpdate = (nextOperator: string) => {
    if (!isNaN(calc.stackValue)) {
      let o1 = calc.stackValue;
      const o2 = Number(this.state.displayText);

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
      const num = Number(this.state.displayText);
      calc.stackValue = num;
    }
    calc.pendingOperator = nextOperator;
    calc.showingPreviousResult = true;
  };

  render() {
    return (
      <LinearGradient colors={['#808080', '#000']} style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={require('../../../assets/flecha.png')} style={styles.imageflecha} />
        </TouchableOpacity>
        <View style={styles.calculatorContainer}>
          <View style={styles.textRow}>
            <Text style={styles.text}>{this.state.displayText}</Text>
          </View>
          <View style={styles.buttonRow}>
            <CalcButton
              name={operators.clearEntry}
              onPress={n => this.buttonPress(n)}
            />
            <CalcButton
              name={operators.clear}
              onPress={n => this.buttonPress(n)}
            />
            <CalcButton
              name={operators.backspace}
              onPress={n => this.buttonPress(n)}
            />
            <CalcButton
              name={operators.divide}
              onPress={n => this.buttonPress(n)}
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton name="7" onPress={n => this.buttonPress(n)} />
            <CalcButton name="8" onPress={n => this.buttonPress(n)} />
            <CalcButton name="9" onPress={n => this.buttonPress(n)} />
            <CalcButton
              name={operators.multiply}
              onPress={n => this.buttonPress(n)}
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton name="4" onPress={n => this.buttonPress(n)} />
            <CalcButton name="5" onPress={n => this.buttonPress(n)} />
            <CalcButton name="6" onPress={n => this.buttonPress(n)} />
            <CalcButton
              name={operators.subtract}
              onPress={n => this.buttonPress(n)}
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton name="1" onPress={n => this.buttonPress(n)} />
            <CalcButton name="2" onPress={n => this.buttonPress(n)} />
            <CalcButton name="3" onPress={n => this.buttonPress(n)} />
            <CalcButton name={operators.add} onPress={n => this.buttonPress(n)} />
          </View>
          <View style={styles.buttonRow}>
            <CalcButton
              name={operators.sign}
              onPress={n => this.buttonPress(n)}
            />
            <CalcButton name="0" onPress={n => this.buttonPress(n)} />
            <CalcButton
              name={operators.decimal}
              onPress={n => this.buttonPress(n)}
            />
            <CalcButton
              name={operators.equals}
              onPress={n => this.buttonPress(n)}
            />
          </View>
        </View>
      </LinearGradient>
    );
  }
}

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
