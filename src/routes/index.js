import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import Comics from '../pages/Comics';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Main" component={Main} />
        <Stack.Screen name="Comics" component={Comics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
