import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

import react from '../../assets/react.png';
import google from '../../assets/icons8-logo-de-google-48.png';
import facebook from '../../assets/icons8-facebook-48.png';
import twitter from '../../assets/icons8-twitterx-48.png';
import apple from '../../assets/icons8-mac-os-48.png';
import styles from './styles';
import SocialsButton from './components/SocialsButton';

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={react} style={styles.icon} />
      <Text style={[styles.text, styles.title]}>BIENVENIDO</Text>
      <Text style={styles.text}>
        Seleccionar una opción para iniciar sesión
      </Text>
      <View>
        <SocialsButton name="Google" icon={google} />
        <SocialsButton name="Facebook" icon={facebook} />
        <SocialsButton name="X" icon={twitter} />
        <SocialsButton name="Apple" icon={apple} />
        <View style={styles.buttonLogin}>
          <Text style={styles.textButton}>INICIAR SESIÓN</Text>
        </View>
      </View>
      <View style={styles.singupContainer}>
        <Text style={styles.text}>¿No tienes cuenta?</Text>
        <Text style={[styles.singupText, styles.text]}>Registrate</Text>
      </View>
      <View>
        <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
      </View>
    </SafeAreaView>
  );
}

export default Login;
