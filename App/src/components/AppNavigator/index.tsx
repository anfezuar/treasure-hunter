import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../screens/Home';
import ClueScreen from '../../screens/ClueScreen';
import MapScreen from '../../screens/MapScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  // useEffect(() => {
  //   Geolocation.setRNConfiguration({skipPermissionRequests: true});
  // });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Clue"
          component={ClueScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
