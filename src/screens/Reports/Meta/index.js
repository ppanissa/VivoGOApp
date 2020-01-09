import React, { useEffect, useState, useMemo } from 'react';
import { Text, Animated, PanResponder } from 'react-native';
import { ScreenOrientation } from 'expo';
import { useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';

// import Animated from 'react-native-reanimated';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { statusBarHide } from '~/store/modules/settings/actions';

import Layout from '~/components/_layouts/Landscape';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderOptions,
  ButtonOption,
  WrapperScroll,
  SideMenu,
} from './styles';
import IconOption from '~/components/Svg/Option';

const { Value, spring } = Animated;

function ReportMetaFilial({ navigation, isFocused }) {
  const dispatch = useDispatch();

  const [pageLoading, setPageLoading] = useState(true);

  const [toogle, setToogle] = useState(false);
  const [position] = useState(new Value(0));

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
      }),
    []
  );

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
      }
    }
    cleanup();
  }, [dispatch, isFocused]);

  const toggleDrawer = () => {
    setToogle(!toogle);
  };

  useEffect(() => {
    function drawer() {
      if (toogle) {
        spring(position, {
          toValue: 300,
          bounceness: 10,
        }).start();
      } else {
        spring(position, {
          toValue: 0,
          bounceness: 10,
        }).start();
      }
    }
    drawer();
    return () => {
      spring(position, {
        toValue: 0,
        bounceness: 10,
      }).start();
    };
  }, [position, toogle]);

  return pageLoading ? (
    <></>
  ) : (
    <Layout navigation={navigation}>
      <Container>
        <Header>
          <HeaderTitle>RELATÓRIO META</HeaderTitle>
          <HeaderOptions>
            <ButtonOption onPress={() => toggleDrawer()}>
              <IconOption />
            </ButtonOption>
          </HeaderOptions>
        </Header>
        <WrapperScroll horizontal showsHorizontalScrollIndicator={false} />
        <SideMenu
          {...panResponder.panHandlers}
          as={Animated.View}
          style={[
            {
              width: position.interpolate({
                inputRange: [0, 300],
                outputRange: [0, 300],
                extrapolate: 'clamp',
              }),
            },
          ]}
        >
          <TouchableOpacity onPress={() => toggleDrawer()}>
            <Text style={{ color: '#fff', fontSize: 20 }}>Fechar</Text>
          </TouchableOpacity>
          <Text>Oie</Text>
        </SideMenu>
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
