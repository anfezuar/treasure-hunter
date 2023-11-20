import React, {ReactNode, memo} from 'react';
import {ImageBackground} from 'react-native';

import backgroundImage from '../../assets/background.png';

import styles from './styles';

interface Props {
  children: ReactNode;
}
function BackgroundScreen({children}: Props) {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.bgImage}
      resizeMode="stretch">
      {children}
    </ImageBackground>
  );
}

export default memo(BackgroundScreen);
