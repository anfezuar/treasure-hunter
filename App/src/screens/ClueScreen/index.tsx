import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import {useNavigation, useRoute} from '@react-navigation/native';

import {CLUES} from '../../config/data/clues';

import styles from './styles';

const ClueScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {clueId} = route.params;
  const selectedClue = CLUES.find(c => c.id === clueId);

  const getLocationUpdates = async () => {
    const hasLocationPermission = await Geolocation.requestAuthorization(
      'whenInUse',
    );
    if (!hasLocationPermission) {
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        console.log('position', position);
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
  const handleIr = async () => {
    const hasLocationPermission = await Geolocation.requestAuthorization(
      'whenInUse',
    );
    if (!hasLocationPermission) {
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        navigation.navigate('Map', {clueId: 1, position});
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
    <View style={styles.container}>
      <Text>{`Pista: ${selectedClue?.clue}`}</Text>
      <TouchableOpacity onPress={handleIr}>
        <Text>Ir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClueScreen;
