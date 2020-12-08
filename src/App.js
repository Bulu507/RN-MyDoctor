import React, {useState} from 'react';

import FlashMessage from 'react-native-flash-message';
import {Loading} from './components';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

export default function App() {
  const [loading, setloading] = useState(false);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {loading && <Loading />}
    </>
  );
}
