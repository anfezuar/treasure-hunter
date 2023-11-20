import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';

import styles from './styles';
function SocialsButton({
  name,
  icon,
}: {
  name: string;
  icon: ImageSourcePropType;
}): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={icon} />
      <Text style={styles.textButton}>{`Iniciar sesión con ${name}`}</Text>
    </View>
  );
}

export default SocialsButton;
