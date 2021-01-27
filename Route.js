import React from 'react';
import App from './App';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/public/redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist';

const persistedStore = persistStore(store);

const Route = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate persistor={persistedStore} loading={null}>
            <App />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default Route;
