import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/public/redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Login from './src/screens/Auth/Login';
import SignUp from './src/screens/Auth/SignUp';
import Forgot from './src/screens/Auth/Forgot';
import Reset from './src/screens/Auth/Reset';
import Shop from './src/screens/Shop';
import Bag from './src/screens/Bag';
import Favorite from './src/screens/Favorite';
import Product from './src/screens/Product';
import Catalog from './src/screens/Catalog';
import Checkout from './src/screens/Checkout';
import Success from './src/screens/Success';
import AddProduct from './src/screens/AddProduct';
import MyProducts from './src/screens/MyProducts';
import EditProduct from './src/screens/EditProduct';
import Notification from './src/components/Notification/Notification';
import Search from './src/components/Search/Search';
import MyOrder from './src/components/MyOrder/MyOrder';
import Shipping from './src/components/Shipping/Shipping';
import Setup from './src/components/Setup/Setup';
import NewProducts from './src/components/NewProducts/NewProducts';
import PopularProducts from './src/components/PopularProducts/PopularProducts';
import Chat from './src/screens/Chat';
import Address from './src/screens/Address';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const persistedStore = persistStore(store);

import {useSelector} from 'react-redux';
import {SocketProvider} from './src/public/context/SocketProvider';

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
        name="Wishlist"
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

const appRouter = ({navigation}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const id = useSelector((state) => state.auth.id);

  return (
    <SocketProvider id={id}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Tab" component={MyTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Detail" component={Product} />
        <Stack.Screen name="Catalog" component={Catalog} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Order" component={MyOrder} />
        <Stack.Screen name="Shipping" component={Shipping} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="MyProducts" component={MyProducts} />
        <Stack.Screen name="EditProduct" component={EditProduct} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="NewProducts" component={NewProducts} />
        <Stack.Screen name="PopularProducts" component={PopularProducts} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Address" component={Address} />
      </Stack.Navigator>
    </SocketProvider>
  );
};

export default appRouter;
