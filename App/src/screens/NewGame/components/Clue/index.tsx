import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {GeoPosition} from 'react-native-geolocation-service';

import location from '../../../../assets/location.png';

interface Props {
  clueId: number;
  clue: string;
  position: GeoPosition;
}
function Clue({clueId, clue, position}: Props) {
  return (
    <View>
      <Text>{clue}</Text>
      <TouchableOpacity>
        <Image source={location} />
      </TouchableOpacity>
    </View>
  );
}

export default memo(Clue);
