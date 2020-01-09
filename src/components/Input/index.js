import React, { useState, useEffect, forwardRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { Container, TextInput } from './styles';

const Input = forwardRef(({ style, icon, password, ...rest }, ref) => {
  const [iconPassword, setIconPassword] = useState('eye');
  const [hidePassword, setHidePassword] = useState(null);

  useEffect(() => {
    function verifyPropPassword() {
      if (password && typeof hidePassword !== 'boolean') {
        setHidePassword(password);
      }
    }
    verifyPropPassword();
  }, [hidePassword, password]);

  const handlePassword = () => {
    const hideState = !hidePassword;

    setIconPassword(hideState ? 'eye' : 'eye-off');

    setHidePassword(hideState);
  };

  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <TextInput {...rest} ref={ref} password={hidePassword} />
      {password && (
        <TouchableWithoutFeedback
          onPress={handlePassword}
          hitSlop={{ left: 40, right: 40, top: 40, bottom: 40 }}
        >
          <Icon name={iconPassword} size={20} color="rgba(255,255,255,0.6)" />
        </TouchableWithoutFeedback>
      )}
    </Container>
  );
});

Input.propTypes = {
  icon: PropTypes.string,
  password: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
  password: false,
};

export default Input;
