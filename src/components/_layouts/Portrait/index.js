import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';
import { ScreenOrientation } from 'expo';
import PropTypes from 'prop-types';
import HeaderLogo from '~/components/Svg/HeaderLogo';

import {
  Container,
  WrapperSafe,
  WrapperHeaderHorizontal,
  ButtonDrawer,
  Wrapper,
} from './styles';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;

export default function Layout({ navigation, children }) {
  useEffect(() => {
    async function layoutPortrait() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }
    layoutPortrait();
  }, []);

  return (
    <Container
      style={{
        marginTop: Platform.OS === 'ios' ? 0 : STATUSBAR_HEIGHT,
      }}
    >
      <WrapperSafe>
        <WrapperHeaderHorizontal
          style={{ paddingTop: Platform.OS === 'ios' ? 20 : 10 }}
        >
          <ButtonDrawer onPress={() => navigation.openDrawer()}>
            <Icon size={32} color="#fff" name="menu" />
          </ButtonDrawer>
          <HeaderLogo width="102px" height="22px" />
        </WrapperHeaderHorizontal>
        <Wrapper>{children}</Wrapper>
      </WrapperSafe>
    </Container>
  );
}

Layout.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
