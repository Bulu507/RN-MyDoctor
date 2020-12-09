import {Provider, useSelector} from 'react-redux';

import FlashMessage from 'react-native-flash-message';
import {Loading} from './components';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import store from './redux/store';

const MainApp = () => {
  const stateGlobal = useSelector((state) => state);
  console.log('state global: ', stateGlobal);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
    </>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
