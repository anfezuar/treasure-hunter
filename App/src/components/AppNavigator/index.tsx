import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../screens/Home';
import ClueScreen from '../../screens/ClueScreen';
import MapScreen from '../../screens/MapScreen';
import {Screens} from '../../constants';
import {ParamsList} from './interfaces';
import NewGame from '../../screens/NewGame';

const Stack = createNativeStackNavigator<ParamsList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.HOME}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.CLUE}
          component={ClueScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.MAP}
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.NEW_GAME}
          component={NewGame}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
