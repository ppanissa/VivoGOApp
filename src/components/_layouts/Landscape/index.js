import React from 'react';
import { DrawerActions } from 'react-navigation-drawer';
import { Feather as Icon } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import HeaderLogo from '~/components/Svg/HeaderLogo';

import {
  Container,
  WrapperSafeVertical,
  WrapperHeaderVertical,
  ButtonDrawerVertical,
  Wrapper,
} from './styles';

export default function LayoutLandscape({ navigation, children }) {
  const { dispatch } = navigation;

  return (
    <Container>
      <WrapperSafeVertical>
        <WrapperHeaderVertical>
          <ButtonDrawerVertical
            spacing
            hitSlop={{ left: 20, right: 20, bottom: 30, top: 30 }}
            onPress={() => dispatch(DrawerActions.openDrawer())}
          >
            <Icon size={32} color="#fff" name="menu" />
          </ButtonDrawerVertical>
          <HeaderLogo width="102px" height="22px" type="v" />
        </WrapperHeaderVertical>

        <Wrapper>{children}</Wrapper>
      </WrapperSafeVertical>
    </Container>
  );
}

LayoutLandscape.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
