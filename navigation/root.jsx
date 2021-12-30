import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withTheme } from 'styled-components';

import Login from './../screens/login/login.screen';
import Signup from './../screens/signup/signup.screen';
import Welcome from './../screens/welcome/welcome.screen';

const Stack = createNativeStackNavigator();

const RootStack = ({ theme: { colors } }) => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'transparent' },
        headerTintColor: 'red',
        headerTransparent: true,
        headerTitle: '',
        headerShadowVisible: false,
      }}
      initialRouteName='login'
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{ headerTintColor: `${colors.bg.dark}` }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default withTheme(RootStack);
