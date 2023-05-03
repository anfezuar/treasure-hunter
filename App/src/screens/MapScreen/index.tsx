import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import MapView, {Circle, Marker} from 'react-native-maps';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

import {CLUES} from '../../config/data/clues';
import {gradesToRadians} from '../../utils';

import styles from './styles';

const MapScreen = () => {
  const route = useRoute();
  const {clueId, position} = route.params || {};
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<GeoPosition>(position);
  const [isNear, setIsNear] = useState(false);
  const defaultPosition = {latitude: 7.073002, longitude: -70.751324};
  const selectedClue = CLUES.find(c => c.id === clueId);

  const [updatesEnabled, setUpdatesEnabled] = useState(false);

  const getLocationUpdates = async () => {
    const hasLocationPermission = await Geolocation.requestAuthorization(
      'whenInUse',
    );
    if (!hasLocationPermission) {
      return;
    }
    setUpdatesEnabled(true);
    Geolocation.watchPosition(
      position => {
        console.log('position', position);
        setCurrentPosition(position);
      },
      error => {
        console.log('error', error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
      },
    );
  };

  // const removeLocationUpdates = () => {
  //     if (this.watchId !== null) {
  //         Geolocation.clearWatch(this.watchId);
  //         this.setState({ updatesEnabled: false })
  //     }
  // }

  useEffect(() => {
    getLocationUpdates();
  });

  const handleMarkerPress = () => {
    setModalVisible(true);
  };

  const handleSiguientePista = () => {
    setModalVisible(false);
    // Navegar a la siguiente pista
  };
  console.log('currentPosition', currentPosition);
  const distanceToClue = () => {
    const RADIO_TIERRA_EN_KILOMETROS = 6371;
    if (selectedClue && currentPosition?.coords) {
      const lat1 = gradesToRadians(currentPosition.coords.latitude);
      const lon1 = gradesToRadians(currentPosition.coords.longitude);
      const lat2 = gradesToRadians(selectedClue.location.latitude);
      const lon2 = gradesToRadians(selectedClue.location.longitude);
      // Aplicar fórmula
      const diffLong = lon2 - lon1;
      const diffLat = lat2 - lat1;
      let a =
        Math.pow(Math.sin(diffLat / 2.0), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(diffLong / 2.0), 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return RADIO_TIERRA_EN_KILOMETROS * c;
    }
    return 0;
  };

  const distance = distanceToClue();

  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.title}>Ubicación actual</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...(currentPosition?.coords || defaultPosition),
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}>
        {currentPosition?.coords && (
          <Marker coordinate={currentPosition.coords} />
        )}
        {selectedClue && (
          <Circle
            fillColor={
              distance < 0.01
                ? 'rgba(86, 238, 38, 0.5)'
                : distance < 1
                ? 'rgba(238, 219, 38, 0.5)'
                : 'rgba(238, 59, 38, 0.5)'
            }
            center={{
              ...selectedClue?.location,
            }}
            radius={distance * 1000}
          />
        )}
      </MapView>
      <Text>
        {distance < 0.01
          ? 'Lo lograste'
          : distance < 1
          ? 'Estas caliente'
          : 'friaaaa!'}
      </Text>
      {distance < 0.01 && (
        <TouchableOpacity style={styles.button} onPress={handleSiguientePista}>
          <Text style={styles.buttonText}>Ir</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MapScreen;
