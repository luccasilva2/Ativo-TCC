import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/SignIn/";
import SignUp from "../screens/SignUp";
import Config from "../screens/Config/";
import Initial from "../screens/Initial/";
import Report from "../screens/Report";
import Main from "../screens/Main/";
import New from "../screens/New";
import Calculadora from "../screens/Calculadora"
import CalculadoraCompostos from "../screens/CalculadoraCompostos"
import ProgressBar from "../screens/ProgressBar"
import JogoLevel1 from "../screens2/JogoLevel1"
import JogoLevel2 from "../screens2/JogoLevel2"
import JogoLevel3 from "../screens2/JogoLevel3"
import JogoLevel4 from "../screens2/JogoLevel4"
import JogoLevel5 from "../screens2/JogoLevel5"
import JogoLevel6 from "../screens2/JogoLevel6"
import JogoLevel7 from "../screens2/JogoLevel7"
import JogoLevel8 from "../screens2/JogoLevel8"
import JogoLevel9 from "../screens2/JogoLevel9"
import JogoLevel10 from "../screens2/JogoLevel10"
import Parabens from "../screens2/Parabens"
import Informacoes from "../screens/Informacoes"
import Alterarnome from "../screens/Gastos"

/* Niveis Level 1 */

import Nivel1pagina1 from "../Niveis/nivel1/nivel1pagina1"
import Nivel1pagina2 from "../Niveis/nivel1/nivel1pagina2"
import Nivel1pagina3 from "../Niveis/nivel1/nivel1pagina3"
import Nivel1pagina4 from "../Niveis/nivel1/nivel1pagina4"
import Nivel1pagina5 from "../Niveis/nivel1/nivel1pagina5"
import Nivel1pagina6 from "../Niveis/nivel1/nivel1pagina6"
import Nivel1pagina7 from "../Niveis/nivel1/nivel1pagina7"
import Nivel1pagina8 from "../Niveis/nivel1/nivel1pagina8"
import Nivel1pagina9 from "../Niveis/nivel1/nivel1pagina9"
import Nivel1pagina10 from "../Niveis/nivel1/nivel1pagina10"
import Parabens1 from "../Niveis/nivel1/parabens1"

/* Niveis Level 2 */

import Nivel2pagina1 from "../Niveis/nivel2/nivel2pagina1"
import Nivel2pagina2 from "../Niveis/nivel2/nivel2pagina2"
import Nivel2pagina3 from "../Niveis/nivel2/nivel2pagina3"
import Nivel2pagina4 from "../Niveis/nivel2/nivel2pagina4"
import Nivel2pagina5 from "../Niveis/nivel2/nivel2pagina5"
import Nivel2pagina6 from "../Niveis/nivel2/nivel2pagina6"
import Nivel2pagina7 from "../Niveis/nivel2/nivel2pagina7"
import Nivel2pagina8 from "../Niveis/nivel2/nivel2pagina8"
import Nivel2pagina9 from "../Niveis/nivel2/nivel2pagina9"
import Nivel2pagina10 from "../Niveis/nivel2/nivel2pagina10"
import Parabens2 from "../Niveis/nivel2/parabens2"


/* Niveis Level 3 */

import Nivel3pagina1 from "../Niveis/nivel3/nivel3pagina1"
import Nivel3pagina2 from "../Niveis/nivel3/nivel3pagina2"
import Nivel3pagina3 from "../Niveis/nivel3/nivel3pagina3"
import Nivel3pagina4 from "../Niveis/nivel3/nivel3pagina4"
import Nivel3pagina5 from "../Niveis/nivel3/nivel3pagina5"
import Nivel3pagina6 from "../Niveis/nivel3/nivel3pagina6"
import Nivel3pagina7 from "../Niveis/nivel3/nivel3pagina7"
import Nivel3pagina8 from "../Niveis/nivel3/nivel3pagina8"
import Nivel3pagina9 from "../Niveis/nivel3/nivel3pagina9"
import Nivel3pagina10 from "../Niveis/nivel3/nivel3pagina10"
import Parabens3 from "../Niveis/nivel3/parabens3"


/* Niveis Level 4 */

import Nivel4pagina1 from "../Niveis/nivel4/nivel4pagina1"
import Nivel4pagina2 from "../Niveis/nivel4/nivel4pagina2"
import Nivel4pagina3 from "../Niveis/nivel4/nivel4pagina3"
import Nivel4pagina4 from "../Niveis/nivel4/nivel4pagina4"
import Nivel4pagina5 from "../Niveis/nivel4/nivel4pagina5"
import Nivel4pagina6 from "../Niveis/nivel4/nivel4pagina6"
import Nivel4pagina7 from "../Niveis/nivel4/nivel4pagina7"
import Nivel4pagina8 from "../Niveis/nivel4/nivel4pagina8"
import Nivel4pagina9 from "../Niveis/nivel4/nivel4pagina9"
import Nivel4pagina10 from "../Niveis/nivel4/nivel4pagina10"
import Parabens4 from "../Niveis/nivel4/parabens4"


/* Niveis Level 5 */

import Nivel5pagina1 from "../Niveis/nivel5/nivel5pagina1"
import Nivel5pagina2 from "../Niveis/nivel5/nivel5pagina2"
import Nivel5pagina3 from "../Niveis/nivel5/nivel5pagina3"
import Nivel5pagina4 from "../Niveis/nivel5/nivel5pagina4"
import Nivel5pagina5 from "../Niveis/nivel5/nivel5pagina5"
import Nivel5pagina6 from "../Niveis/nivel5/nivel5pagina6"
import Nivel5pagina7 from "../Niveis/nivel5/nivel5pagina7"
import Nivel5pagina8 from "../Niveis/nivel5/nivel5pagina8"
import Nivel5pagina9 from "../Niveis/nivel5/nivel5pagina9"
import Nivel5pagina10 from "../Niveis/nivel5/nivel5pagina10"
import Parabens5 from "../Niveis/nivel5/parabens5"


/* Niveis Level 6 */

import Nivel6pagina1 from "../Niveis/nivel6/nivel6pagina1"
import Nivel6pagina2 from "../Niveis/nivel6/nivel6pagina2"
import Nivel6pagina3 from "../Niveis/nivel6/nivel6pagina3"
import Nivel6pagina4 from "../Niveis/nivel6/nivel6pagina4"
import Nivel6pagina5 from "../Niveis/nivel6/nivel6pagina5"
import Nivel6pagina6 from "../Niveis/nivel6/nivel6pagina6"
import Nivel6pagina7 from "../Niveis/nivel6/nivel6pagina7"
import Nivel6pagina8 from "../Niveis/nivel6/nivel6pagina8"
import Nivel6pagina9 from "../Niveis/nivel6/nivel6pagina9"
import Nivel6pagina10 from "../Niveis/nivel6/nivel6pagina10"
import Parabens6 from "../Niveis/nivel6/parabens6"


/* Niveis Level 7 */

import Nivel7pagina1 from "../Niveis/nivel7/nivel7pagina1"
import Nivel7pagina2 from "../Niveis/nivel7/nivel7pagina2"
import Nivel7pagina3 from "../Niveis/nivel7/nivel7pagina3"
import Nivel7pagina4 from "../Niveis/nivel7/nivel7pagina4"
import Nivel7pagina5 from "../Niveis/nivel7/nivel7pagina5"
import Nivel7pagina6 from "../Niveis/nivel7/nivel7pagina6"
import Nivel7pagina7 from "../Niveis/nivel7/nivel7pagina7"
import Nivel7pagina8 from "../Niveis/nivel7/nivel7pagina8"
import Nivel7pagina9 from "../Niveis/nivel7/nivel7pagina9"
import Nivel7pagina10 from "../Niveis/nivel7/nivel7pagina10"
import Parabens7 from "../Niveis/nivel7/parabens7"


/* Niveis Level 8 */

import Nivel8pagina1 from "../Niveis/nivel8/nivel8pagina1"
import Nivel8pagina2 from "../Niveis/nivel8/nivel8pagina2"
import Nivel8pagina3 from "../Niveis/nivel8/nivel8pagina3"
import Nivel8pagina4 from "../Niveis/nivel8/nivel8pagina4"
import Nivel8pagina5 from "../Niveis/nivel8/nivel8pagina5"
import Nivel8pagina6 from "../Niveis/nivel8/nivel8pagina6"
import Nivel8pagina7 from "../Niveis/nivel8/nivel8pagina7"
import Nivel8pagina8 from "../Niveis/nivel8/nivel8pagina8"
import Nivel8pagina9 from "../Niveis/nivel8/nivel8pagina9"
import Nivel8pagina10 from "../Niveis/nivel8/nivel8pagina10"
import Parabens8 from "../Niveis/nivel8/parabens8"


/* Niveis Level 9 */

import Nivel9pagina1 from "../Niveis/nivel9/nivel9pagina1"
import Nivel9pagina2 from "../Niveis/nivel9/nivel9pagina2"
import Nivel9pagina3 from "../Niveis/nivel9/nivel9pagina3"
import Nivel9pagina4 from "../Niveis/nivel9/nivel9pagina4"
import Nivel9pagina5 from "../Niveis/nivel9/nivel9pagina5"
import Nivel9pagina6 from "../Niveis/nivel9/nivel9pagina6"
import Nivel9pagina7 from "../Niveis/nivel9/nivel9pagina7"
import Nivel9pagina8 from "../Niveis/nivel9/nivel9pagina8"
import Nivel9pagina9 from "../Niveis/nivel9/nivel9pagina9"
import Nivel9pagina10 from "../Niveis/nivel9/nivel9pagina10"
import Parabens9 from "../Niveis/nivel9/parabens9"


/* Niveis Level 10 */

import Nivel10pagina1 from "../Niveis/nivel10/nivel10pagina1"
import Nivel10pagina2 from "../Niveis/nivel10/nivel10pagina2"
import Nivel10pagina3 from "../Niveis/nivel10/nivel10pagina3"
import Nivel10pagina4 from "../Niveis/nivel10/nivel10pagina4"
import Nivel10pagina5 from "../Niveis/nivel10/nivel10pagina5"
import Nivel10pagina6 from "../Niveis/nivel10/nivel10pagina6"
import Nivel10pagina7 from "../Niveis/nivel10/nivel10pagina7"
import Nivel10pagina8 from "../Niveis/nivel10/nivel10pagina8"
import Nivel10pagina9 from "../Niveis/nivel10/nivel10pagina9"
import Nivel10pagina10 from "../Niveis/nivel10/nivel10pagina10"
import Parabens10 from "../Niveis/nivel10/parabens10"



const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator initialRouteName="initial"
        screenOptions={{
        headerShown: false,
        }
        } >
            <Stack.Screen 
            name="initial"
            component={Initial}
            options={{headerShown: false}
        }
            />

            <Stack.Screen 
            name="signin"
            component={SignIn}
            />
            
            <Stack.Screen 
            name="signup"
            component={SignUp}
            options={{ title: "Cadastro"}}
            />

            <Stack.Screen 
            name="new"
            component={New}
            />

            <Stack.Screen 
            name="config"
            component={Config}
            />

            <Stack.Screen 
            name="main"
            component={Main}
            />

            <Stack.Screen 
            name="report"
            component={Report}
            />

            <Stack.Screen 
            name="calculadora"
            component={Calculadora}
            />

            <Stack.Screen
            name="calculadoracompostos"
            component={CalculadoraCompostos}
            />

            <Stack.Screen
            name="progressbar"
            component={ProgressBar}
            />

            <Stack.Screen
            name="informacoes"
            component={Informacoes}
            />

            <Stack.Screen
            name="alterarnome"
            component={Alterarnome}
            />

            <Stack.Screen 
            name="jogolevel1"
            component={JogoLevel1}
            />

            <Stack.Screen 
            name="jogolevel2"
            component={JogoLevel2}
            />

            <Stack.Screen 
            name="jogolevel3"
            component={JogoLevel3}
            />

            <Stack.Screen 
            name="jogolevel4"
            component={JogoLevel4}
            />

            <Stack.Screen 
            name="jogolevel5"
            component={JogoLevel5}
            />

            <Stack.Screen 
            name="jogolevel6"
            component={JogoLevel6}
            />

            <Stack.Screen 
            name="jogolevel7"
            component={JogoLevel7}
            />

            <Stack.Screen 
            name="jogolevel8"
            component={JogoLevel8}
            />

            <Stack.Screen 
            name="jogolevel9"
            component={JogoLevel9}
            />

            <Stack.Screen 
            name="jogolevel10"
            component={JogoLevel10}
            />

            <Stack.Screen 
            name="parabens"
            component={Parabens}
            />

            {/* Niveis Level 1 */}

            <Stack.Screen 
            name="nivel1pagina1"
            component={Nivel1pagina1}
            />

            <Stack.Screen 
            name="nivel1pagina2"
            component={Nivel1pagina2}
            />
            
            <Stack.Screen 
            name="nivel1pagina3"
            component={Nivel1pagina3}
            />

            <Stack.Screen 
            name="nivel1pagina4"
            component={Nivel1pagina4}
            />

            <Stack.Screen 
            name="nivel1pagina5"
            component={Nivel1pagina5}
            />

            <Stack.Screen 
            name="nivel1pagina6"
            component={Nivel1pagina6}
            />

            <Stack.Screen 
            name="nivel1pagina7"
            component={Nivel1pagina7}
            />

            <Stack.Screen 
            name="nivel1pagina8"
            component={Nivel1pagina8}
            />

            <Stack.Screen 
            name="nivel1pagina9"
            component={Nivel1pagina9}
            />

            <Stack.Screen 
            name="nivel1pagina10"
            component={Nivel1pagina10}
            />

            <Stack.Screen 
            name="parabens1"
            component={Parabens1}
            />


            {/* Niveis Level 2 */}

            <Stack.Screen 
            name="nivel2pagina1"
            component={Nivel2pagina1}
            />

            <Stack.Screen 
            name="nivel2pagina2"
            component={Nivel2pagina2}
            />
            
            <Stack.Screen 
            name="nivel2pagina3"
            component={Nivel2pagina3}
            />

            <Stack.Screen 
            name="nivel2pagina4"
            component={Nivel2pagina4}
            />

            <Stack.Screen 
            name="nivel2pagina5"
            component={Nivel2pagina5}
            />

            <Stack.Screen 
            name="nivel2pagina6"
            component={Nivel2pagina6}
            />

            <Stack.Screen 
            name="nivel2pagina7"
            component={Nivel2pagina7}
            />

            <Stack.Screen 
            name="nivel2pagina8"
            component={Nivel2pagina8}
            />

            <Stack.Screen 
            name="nivel2pagina9"
            component={Nivel2pagina9}
            />

            <Stack.Screen 
            name="nivel2pagina10"
            component={Nivel2pagina10}
            />

            <Stack.Screen 
            name="parabens2"
            component={Parabens2}
            />

            {/* Niveis Level 3 */}

            <Stack.Screen 
            name="nivel3pagina1"
            component={Nivel3pagina1}
            />

            <Stack.Screen 
            name="nivel3pagina2"
            component={Nivel3pagina2}
            />
            
            <Stack.Screen 
            name="nivel3pagina3"
            component={Nivel3pagina3}
            />

            <Stack.Screen 
            name="nivel3pagina4"
            component={Nivel3pagina4}
            />

            <Stack.Screen 
            name="nivel3pagina5"
            component={Nivel3pagina5}
            />

            <Stack.Screen 
            name="nivel3pagina6"
            component={Nivel3pagina6}
            />

            <Stack.Screen 
            name="nivel3pagina7"
            component={Nivel3pagina7}
            />

            <Stack.Screen 
            name="nivel3pagina8"
            component={Nivel3pagina8}
            />

            <Stack.Screen 
            name="nivel3pagina9"
            component={Nivel3pagina9}
            />

            <Stack.Screen 
            name="nivel3pagina10"
            component={Nivel3pagina10}
            />

<Stack.Screen 
            name="parabens3"
            component={Parabens3}
            />

            {/* Niveis Level 4 */}

            <Stack.Screen 
            name="nivel4pagina1"
            component={Nivel4pagina1}
            />

            <Stack.Screen 
            name="nivel4pagina2"
            component={Nivel4pagina2}
            />
            
            <Stack.Screen 
            name="nivel4pagina3"
            component={Nivel4pagina3}
            />

            <Stack.Screen 
            name="nivel4pagina4"
            component={Nivel4pagina4}
            />

            <Stack.Screen 
            name="nivel4pagina5"
            component={Nivel4pagina5}
            />

            <Stack.Screen 
            name="nivel4pagina6"
            component={Nivel4pagina6}
            />

            <Stack.Screen 
            name="nivel4pagina7"
            component={Nivel4pagina7}
            />

            <Stack.Screen 
            name="nivel4pagina8"
            component={Nivel4pagina8}
            />

            <Stack.Screen 
            name="nivel4pagina9"
            component={Nivel4pagina9}
            />

            <Stack.Screen 
            name="nivel4pagina10"
            component={Nivel4pagina10}
            />

<Stack.Screen 
            name="parabens4"
            component={Parabens4}
            />

            {/* Niveis Level 5 */}

            <Stack.Screen 
            name="nivel5pagina1"
            component={Nivel5pagina1}
            />

            <Stack.Screen 
            name="nivel5pagina2"
            component={Nivel5pagina2}
            />
            
            <Stack.Screen 
            name="nivel5pagina3"
            component={Nivel5pagina3}
            />

            <Stack.Screen 
            name="nivel5pagina4"
            component={Nivel5pagina4}
            />

            <Stack.Screen 
            name="nivel5pagina5"
            component={Nivel5pagina5}
            />

            <Stack.Screen 
            name="nivel5pagina6"
            component={Nivel5pagina6}
            />

            <Stack.Screen 
            name="nivel5pagina7"
            component={Nivel5pagina7}
            />

            <Stack.Screen 
            name="nivel5pagina8"
            component={Nivel5pagina8}
            />

            <Stack.Screen 
            name="nivel5pagina9"
            component={Nivel5pagina9}
            />

            <Stack.Screen 
            name="nivel5pagina10"
            component={Nivel5pagina10}
            />

<Stack.Screen 
            name="parabens5"
            component={Parabens5}
            />

            {/* Niveis Level 6 */}

            <Stack.Screen 
            name="nivel6pagina1"
            component={Nivel6pagina1}
            />

            <Stack.Screen 
            name="nivel6pagina2"
            component={Nivel6pagina2}
            />
            
            <Stack.Screen 
            name="nivel6pagina3"
            component={Nivel6pagina3}
            />

            <Stack.Screen 
            name="nivel6pagina4"
            component={Nivel6pagina4}
            />

            <Stack.Screen 
            name="nivel6pagina5"
            component={Nivel6pagina5}
            />

            <Stack.Screen 
            name="nivel6pagina6"
            component={Nivel6pagina6}
            />

            <Stack.Screen 
            name="nivel6pagina7"
            component={Nivel6pagina7}
            />

            <Stack.Screen 
            name="nivel6pagina8"
            component={Nivel6pagina8}
            />

            <Stack.Screen 
            name="nivel6pagina9"
            component={Nivel6pagina9}
            />

            <Stack.Screen 
            name="nivel6pagina10"
            component={Nivel6pagina10}
            />

<Stack.Screen 
            name="parabens6"
            component={Parabens6}
            />

            {/* Niveis Level 7 */}

                        <Stack.Screen 
            name="nivel7pagina1"
            component={Nivel7pagina1}
            />

            <Stack.Screen 
            name="nivel7pagina2"
            component={Nivel7pagina2}
            />

            <Stack.Screen 
            name="nivel7pagina3"
            component={Nivel7pagina3}
            />

            <Stack.Screen 
            name="nivel7pagina4"
            component={Nivel7pagina4}
            />

            <Stack.Screen 
            name="nivel7pagina5"
            component={Nivel7pagina5}
            />

            <Stack.Screen 
            name="nivel7pagina6"
            component={Nivel7pagina6}
            />

            <Stack.Screen 
            name="nivel7pagina7"
            component={Nivel7pagina7}
            />

            <Stack.Screen 
            name="nivel7pagina8"
            component={Nivel7pagina8}
            />

            <Stack.Screen 
            name="nivel7pagina9"
            component={Nivel7pagina9}
            />

            <Stack.Screen 
            name="nivel7pagina10"
            component={Nivel7pagina10}
            />

<Stack.Screen 
            name="parabens7"
            component={Parabens7}
            />

            {/* Niveis Level 8 */}

            <Stack.Screen 
            name="nivel8pagina1"
            component={Nivel8pagina1}
            />

            <Stack.Screen 
            name="nivel8pagina2"
            component={Nivel8pagina2}
            />
            
            <Stack.Screen 
            name="nivel8pagina3"
            component={Nivel8pagina3}
            />

            <Stack.Screen 
            name="nivel8pagina4"
            component={Nivel8pagina4}
            />

            <Stack.Screen 
            name="nivel8pagina5"
            component={Nivel8pagina5}
            />

            <Stack.Screen 
            name="nivel8pagina6"
            component={Nivel8pagina6}
            />

            <Stack.Screen 
            name="nivel8pagina7"
            component={Nivel8pagina7}
            />

            <Stack.Screen 
            name="nivel8pagina8"
            component={Nivel8pagina8}
            />

            <Stack.Screen 
            name="nivel8pagina9"
            component={Nivel8pagina9}
            />

            <Stack.Screen 
            name="nivel8pagina10"
            component={Nivel8pagina10}
            />

<Stack.Screen 
            name="parabens8"
            component={Parabens8}
            />

            {/* Niveis Level 9 */}

            <Stack.Screen 
            name="nivel9pagina1"
            component={Nivel9pagina1}
            />

            <Stack.Screen 
            name="nivel9pagina2"
            component={Nivel9pagina2}
            />
            
            <Stack.Screen 
            name="nivel9pagina3"
            component={Nivel9pagina3}
            />

            <Stack.Screen 
            name="nivel9pagina4"
            component={Nivel9pagina4}
            />

            <Stack.Screen 
            name="nivel9pagina5"
            component={Nivel9pagina5}
            />

            <Stack.Screen 
            name="nivel9pagina6"
            component={Nivel9pagina6}
            />

            <Stack.Screen 
            name="nivel9pagina7"
            component={Nivel9pagina7}
            />

            <Stack.Screen 
            name="nivel9pagina8"
            component={Nivel9pagina8}
            />

            <Stack.Screen 
            name="nivel9pagina9"
            component={Nivel9pagina9}
            />

            <Stack.Screen 
            name="nivel9pagina10"
            component={Nivel9pagina10}
            />

<Stack.Screen 
            name="parabens9"
            component={Parabens9}
            />

            {/* Niveis Level 10 */}

            <Stack.Screen 
            name="nivel10pagina1"
            component={Nivel10pagina1}
            />

            <Stack.Screen 
            name="nivel10pagina2"
            component={Nivel10pagina2}
            />
            
            <Stack.Screen 
            name="nivel10pagina3"
            component={Nivel10pagina3}
            />

            <Stack.Screen 
            name="nivel10pagina4"
            component={Nivel10pagina4}
            />

            <Stack.Screen 
            name="nivel10pagina5"
            component={Nivel10pagina5}
            />

            <Stack.Screen 
            name="nivel10pagina6"
            component={Nivel10pagina6}
            />

            <Stack.Screen 
            name="nivel10pagina7"
            component={Nivel10pagina7}
            />

            <Stack.Screen 
            name="nivel10pagina8"
            component={Nivel10pagina8}
            />

            <Stack.Screen 
            name="nivel10pagina9"
            component={Nivel10pagina9}
            />

            <Stack.Screen 
            name="nivel10pagina10"
            component={Nivel10pagina10}
            />

<Stack.Screen 
            name="parabens10"
            component={Parabens10}
            />
        </Stack.Navigator>
    )
}