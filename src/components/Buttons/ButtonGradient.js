import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import styledColors from '~/styles/colors';

const Button = styled(RectButton)`
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 5;
  justify-content: center;
  align-items: center;
`;

const Gradient = styled(LinearGradient).attrs(props => ({
  colors: props.bgColor || styledColors.bgLinear,
  start: { x: 0.4, y: 1 },
  end: { x: 1, y: 0 },
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,

  elevation: 24,
}))`
  border-radius: 5;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.Text`
  color: ${props => props.textColor};
  text-transform: ${props => (props.upper ? 'uppercase' : 'none')};
  font-size: 20px;
  font-family: 'montserrat-bold';
`;

export default function ButtonGradient({
  name,
  textColor,
  bgColor,
  onPress,
  upper,
  loading,
}) {
  return (
    <Gradient bgColor={bgColor}>
      {loading ? (
        <ActivityIndicator size={20} color="rgba(255,255,255,0.6)" />
      ) : (
        <Button onPress={onPress}>
          <BtnText textColor={textColor} upper={upper}>
            {name}
          </BtnText>
        </Button>
      )}
    </Gradient>
  );
}

ButtonGradient.propTypes = {
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.arrayOf(PropTypes.string),
  textColor: PropTypes.string,
  onPress: PropTypes.func,
  upper: PropTypes.bool,
  loading: PropTypes.bool,
};

ButtonGradient.defaultProps = {
  bgColor: styledColors.bgLinear,
  textColor: styledColors.white,
  onPress: () => {},
  upper: false,
  loading: false,
};
