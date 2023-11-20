import React from 'react';
import BackgroundScreen from '../../components/BackgroundScreen';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

function NewGame() {
  return (
    <BackgroundScreen>
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.title}>Treasure Hunter</Text>
          <View style={styles.row}>
            <Text style={styles.textStyle}>Maximo de jugadores:</Text>
            <TextInput style={styles.inputStyle} />
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Pistas</Text>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.textStyle}>Nueva pista</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </BackgroundScreen>
  );
}

export default NewGame;
