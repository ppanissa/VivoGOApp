import React from 'react';
import { useSelector } from 'react-redux';
import { Platform, StatusBar } from 'react-native';

export default function ConfigStatusBar() {
  const { hidden } = useSelector(state => state.settings.statusBar);

  return (
    <StatusBar
      hidden={Platform.OS === 'ios' ? false : hidden}
      backgroundColor="#660099"
      translucent={Platform.OS === 'android'}
      barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      networkActivityIndicatorVisible
    />
  );
}
