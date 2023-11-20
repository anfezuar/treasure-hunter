import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import {CLUES} from '../../config/data/clues';
import {ParamsList} from '../../components/AppNavigator/interfaces';
import {Screens} from '../../constants';
import BackgroundScreen from '../../components/BackgroundScreen';

import styles from './styles';

const ClueScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamsList>>();
  const route = useRoute<RouteProp<ParamsList, Screens.CLUE>>();
  const {clueId} = route.params;
  const selectedClue = CLUES.find(c => c.id === clueId);

  const handleIr = async () => {
    const hasLocationPermission = await Geolocation.requestAuthorization(
      'whenInUse',
    );
    if (!hasLocationPermission) {
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        navigation.navigate(Screens.MAP, {clueId: 1, position});
      },
      error => {
        console.log('error', error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
      },
    );
  };

  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titleStyle}>{'PISTA'}</Text>
          <Text style={styles.textStyle}>{`${selectedClue?.clue}`}</Text>
          <TouchableOpacity onPress={handleIr} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Ir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundScreen>
  );
};

export default ClueScreen;
