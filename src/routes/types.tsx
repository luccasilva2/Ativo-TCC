// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  signin: undefined;
  signup: undefined;
  main: undefined;
  config: undefined;
  profile: undefined;
  new: undefined;
  report: undefined;
  initial: undefined;
  calculadora: undefined
  calculadoracompostos: undefined
  jogolevel1: undefined
  jogolevel2: undefined  
  jogolevel3: undefined
  jogolevel4: undefined
  jogolevel5: undefined
  jogolevel6: undefined
  jogolevel7: undefined
  jogolevel8: undefined
  jogolevel9: undefined
  jogolevel10: undefined
  parabens: undefined
  study: undefined
  progressbar: undefined
  informacoes: undefined
  alterarnome: undefined

  /* Niveis Level 1 */

  nivel1pagina1: undefined
  nivel1pagina2: undefined
  nivel1pagina3: undefined
  nivel1pagina4: undefined
  nivel1pagina5: undefined
  nivel1pagina6: undefined
  nivel1pagina7: undefined
  nivel1pagina8: undefined
  nivel1pagina9: undefined
  nivel1pagina10: undefined
  parabens1: undefined


    /* Niveis Level 2 */

    nivel2pagina1: undefined
    nivel2pagina2: undefined
    nivel2pagina3: undefined
    nivel2pagina4: undefined
    nivel2pagina5: undefined
    nivel2pagina6: undefined
    nivel2pagina7: undefined
    nivel2pagina8: undefined
    nivel2pagina9: undefined
    nivel2pagina10: undefined
    parabens2: undefined


        /* Niveis Level 3 */

        nivel3pagina1: undefined
        nivel3pagina2: undefined
        nivel3pagina3: undefined
        nivel3pagina4: undefined
        nivel3pagina5: undefined
        nivel3pagina6: undefined
        nivel3pagina7: undefined
        nivel3pagina8: undefined
        nivel3pagina9: undefined
        nivel3pagina10: undefined
        parabens3: undefined


            /* Niveis Level 4 */

    nivel4pagina1: undefined
    nivel4pagina2: undefined
    nivel4pagina3: undefined
    nivel4pagina4: undefined
    nivel4pagina5: undefined
    nivel4pagina6: undefined
    nivel4pagina7: undefined
    nivel4pagina8: undefined
    nivel4pagina9: undefined
    nivel4pagina10: undefined
    parabens4: undefined


        /* Niveis Level 5 */

        nivel5pagina1: undefined
        nivel5pagina2: undefined
        nivel5pagina3: undefined
        nivel5pagina4: undefined
        nivel5pagina5: undefined
        nivel5pagina6: undefined
        nivel5pagina7: undefined
        nivel5pagina8: undefined
        nivel5pagina9: undefined
        nivel5pagina10: undefined
        parabens5: undefined


            /* Niveis Level 6 */

    nivel6pagina1: undefined
    nivel6pagina2: undefined
    nivel6pagina3: undefined
    nivel6pagina4: undefined
    nivel6pagina5: undefined
    nivel6pagina6: undefined
    nivel6pagina7: undefined
    nivel6pagina8: undefined
    nivel6pagina9: undefined
    nivel6pagina10: undefined
    parabens6: undefined


        /* Niveis Level 7 */

        nivel7pagina1: undefined
        nivel7pagina2: undefined
        nivel7pagina3: undefined
        nivel7pagina4: undefined
        nivel7pagina5: undefined
        nivel7pagina6: undefined
        nivel7pagina7: undefined
        nivel7pagina8: undefined
        nivel7pagina9: undefined
        nivel7pagina10: undefined
        parabens7: undefined


            /* Niveis Level 8 */

    nivel8pagina1: undefined
    nivel8pagina2: undefined
    nivel8pagina3: undefined
    nivel8pagina4: undefined
    nivel8pagina5: undefined
    nivel8pagina6: undefined
    nivel8pagina7: undefined
    nivel8pagina8: undefined
    nivel8pagina9: undefined
    nivel8pagina10: undefined 
    parabens8: undefined

        /* Niveis Level 9 */

        nivel9pagina1: undefined
        nivel9pagina2: undefined
        nivel9pagina3: undefined
        nivel9pagina4: undefined
        nivel9pagina5: undefined
        nivel9pagina6: undefined
        nivel9pagina7: undefined
        nivel9pagina8: undefined
        nivel9pagina9: undefined
        nivel9pagina10: undefined
        parabens9: undefined


            /* Niveis Level 10 */

    nivel10pagina1: undefined
    nivel10pagina2: undefined
    nivel10pagina3: undefined
    nivel10pagina4: undefined
    nivel10pagina5: undefined
    nivel10pagina6: undefined
    nivel10pagina7: undefined
    nivel10pagina8: undefined
    nivel10pagina9: undefined
    nivel10pagina10: undefined
    parabens10: undefined

};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>;
