import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Login from './src/screens/Auth/Login';

const Stack = createStackNavigator();

const appRouter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default appRouter;
