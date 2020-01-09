import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { ScreenOrientation } from 'expo';
import { useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';

// import Animated from 'react-native-reanimated';

import { statusBarHide } from '~/store/modules/settings/actions';

import Layout from '~/components/_layouts/Landscape';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderOptions,
  ButtonOption,
  WrapperScroll,
  DropDownOption,
} from './styles';

import IconOption from '~/components/Svg/Option';
import OptionSidebar from '~/components/OptionSidebar';

function ReportMetaFilial({ navigation, isFocused }) {
  const dispatch = useDispatch();

  const [pageLoading, setPageLoading] = useState(true);

  const [toogle, setToogle] = useState(false);

  useEffect(() => {
    async function initScreen() {
      if (isFocused) {
        setPageLoading(true);

        dispatch(statusBarHide(true));

        await ScreenOrientation.lockAsync(
          ScreenOrientation.Orientation.LANDSCAPE
        );

        setPageLoading(false);
      }
    }
    initScreen();
    async function cleanup() {
      if (!isFocused) {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.Orientation.PORTRAIT
        );
        dispatch(statusBarHide(false));
        setToogle(false);
      }
    }
    cleanup();
  }, [dispatch, isFocused]);

  function toogleDrawer(value) {
    console.log(value);
    setToogle(!toogle);
  }

  function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  return pageLoading ? (
    <>
      <View>
        <Text>Carregandu</Text>
      </View>
    </>
  ) : (
    <Layout navigation={navigation}>
      <Container>
        <Header>
          <HeaderTitle>FILIAL</HeaderTitle>
          <HeaderOptions>
            <ButtonOption onPress={() => toogleDrawer()}>
              <IconOption />
            </ButtonOption>
          </HeaderOptions>
        </Header>
        <WrapperScroll horizontal showsHorizontalScrollIndicator={false} />
        <OptionSidebar toogle={toogle} onCloseBar={() => toogleDrawer('AQUI')}>
          <DropDownOption style={{ backgroundColor: randomColor() }} />
        </OptionSidebar>
      </Container>
    </Layout>
  );
}

ReportMetaFilial.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigationFocus(ReportMetaFilial);
