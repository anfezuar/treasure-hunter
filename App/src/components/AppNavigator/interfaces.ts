import {GeoPosition} from 'react-native-geolocation-service';
import {Screens} from './../../constants';
import {ParamListBase} from '@react-navigation/native';

export interface ParamsList extends ParamListBase {
  [Screens.HOME]: undefined;
  [Screens.CLUE]: {clueId: number};
  [Screens.MAP]: {clueId: number; position: GeoPosition};
  [Screens.NEW_GAME]: undefined;
}
