import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import bgHome from '../../assets/bgHome.png';
import styles from './styles';

const Home = () => {
  const navigation = useNavigation();
  const [codigo, setCodigo] = useState('123456');

  const handleJugar = () => {
    navigation.navigate('Clue', {clueId: 1});
  };
  return (
    <ImageBackground source={bgHome} style={styles.bgImage} resizeMode="center">
      <View style={styles.content}>
        <Text style={styles.title}>{'Código'}</Text>
        <TextInput
          value={codigo}
          onChangeText={setCodigo}
          style={styles.inputStyle}
        />
        <TouchableOpacity onPress={handleJugar} style={styles.buttonStyle}>
          <Text>{'Jugar'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;
