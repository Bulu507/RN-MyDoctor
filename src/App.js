import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
}
