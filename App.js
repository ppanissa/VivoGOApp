import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading, SplashScreen } from 'expo';
import Splash from '~/screens/SplashScreen';
import Root from '~/index';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadedFonts = () => {
    SplashScreen.hide();
    return Font.loadAsync({
      'officina-serif-bold': require('./assets/fonts/officina-serif-bold.ttf'),
      'montserrat-light': require('./assets/fonts/montserrat-light.ttf'),
      'montserrat-regular': require('./assets/fonts/montserrat-regular.ttf'),
      'montserrat-bold': require('./assets/fonts/montserrat-bold.ttf'),
    });
  };

  return !fontLoaded ? (
    <>
      <AppLoading
        startAsync={loadedFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
      <Splash />
    </>
  ) : (
    <Root />
  );
}
