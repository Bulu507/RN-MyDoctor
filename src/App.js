import React from 'react';
import {Splash, GetStarted} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
