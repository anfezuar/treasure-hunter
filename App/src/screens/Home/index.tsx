import React, {useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View, TextInput, Image} from 'react-native';

import treasureImage from '../../assets/treasure.png';
import treasureHunterImage from '../../assets/treasureHunter.png';
import styles from './styles';
import {Screens} from '../../constants';
import {ParamsList} from '../../components/AppNavigator/interfaces';
import BackgroundScreen from '../../components/BackgroundScreen';

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamsList>>();
  const [code, setCode] = useState('123456');

  const handlePlay = () => {
    navigation.navigate(Screens.CLUE, {clueId: 1});
  };
  const handleNewGame = () => {
    navigation.navigate(Screens.NEW_GAME);
  };

  return (
    <BackgroundScreen>
      <View style={styles.content}>
        <View>
          <Image
            source={treasureImage}
            resizeMode="contain"
            style={styles.imageStyle}
          />
          <View style={styles.logoContainer}>
            <Image
              source={treasureHunterImage}
              resizeMode="contain"
              style={styles.imageTextStyle}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>{'Código del juego'}</Text>
          <TextInput
            value={code}
            onChangeText={setCode}
            style={styles.inputStyle}
          />
          <TouchableOpacity onPress={handlePlay} style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>{'Jugar'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNewGame}
            style={styles.seccondButtonStyle}>
            <Text style={styles.buttonTextStyle}>{'Nuevo juego'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundScreen>
  );
};

export default Home;
