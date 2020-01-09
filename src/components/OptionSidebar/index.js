import React, { useEffect, useState, useMemo } from 'react';
import { Animated, PanResponder } from 'react-native';
import PropTypes from 'prop-types';

import IconOption from '~/components/Svg/Option';
import {
  OptionContainer,
  OptionWrapper,
  ButtonWrapper,
  ButtonToogle,
  ContentScrollView,
  ContentSafeArea,
} from './styles';

const { Value, spring, timing, parallel, delay } = Animated;

export default function OptionSidebar({ onCloseBar, toogle, children }) {
  const [position] = useState(new Value(0));
  const [opacity] = useState(new Value(0));

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
      }),
    []
  );

  useEffect(() => {
    function drawer() {
      if (toogle) {
        parallel([
          spring(position, {
            toValue: 300,
            bounciness: 0,
          }),
          timing(opacity, {
            toValue: 1,
            duration: 500,
          }),
        ]).start();
      } else {
        parallel([
          timing(opacity, {
            toValue: 0,
            duration: 100,
          }),
          delay(100),
          spring(position, {
            toValue: 0,
            bounciness: 20,
            speed: 5,
          }),
        ]).start();
      }
    }
    drawer();
    return () => {
      parallel([
        spring(position, {
          toValue: 0,
          bounciness: 15,
        }),
        timing(opacity, {
          toValue: 0,
          delay: 100,
        }),
      ]).start();
    };
  }, [opacity, position, toogle]);

  return (
    <OptionContainer
      as={Animated.View}
      {...panResponder.panHandlers}
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
      <OptionWrapper
        as={Animated.View}
        style={[
          {
            opacity: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}
      >
        <ButtonWrapper>
          <ButtonToogle
            hitSlop={{ left: 40, right: 40, top: 40, bottom: 40 }}
            onPress={onCloseBar}
          >
            <IconOption iconColor="white" />
          </ButtonToogle>
        </ButtonWrapper>
        <ContentScrollView>
          <ContentSafeArea>{children}</ContentSafeArea>
        </ContentScrollView>
      </OptionWrapper>
    </OptionContainer>
  );
}

OptionSidebar.propTypes = {
  toogle: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onCloseBar: PropTypes.func,
};

OptionSidebar.defaultProps = {
  toogle: false,
  onCloseBar: () => {},
};
