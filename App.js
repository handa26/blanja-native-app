import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Login from './src/screens/Auth/Login';
import SignUp from './src/screens/Auth/SignUp';
import Shop from './src/screens/Shop';
import Bag from './src/screens/Bag';
import Favorite from './src/screens/Favorite';
import Product from './src/screens/Product';
import WarnMessage from './src/components/WarnMessage/WarnMessage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{borderWidth: 0}}
      barStyle={{borderTopLeftRadius: 20}}
      tabBarOptions={{
        activeTintColor: '#DB3022',
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="home" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="shopping-cart" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="shopping-bag" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="heart" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="user-circle-o" size={30} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const appRouter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Tab" component={MyTabs} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen name="Bag" component={Bag} />
          <Stack.Screen name="Favorite" component={Favorite} />
          <Stack.Screen name="Detail" component={Product} />
          <Stack.Screen name="Notification" component={WarnMessage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default appRouter;
