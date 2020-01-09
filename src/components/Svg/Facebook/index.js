import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import logo from './facebook.svg';

export default function Facebook({ width, height }) {
  return <SvgXml xml={logo} width={width} height={height} />;
}

Facebook.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Facebook.defaultProps = {
  width: 'auto',
  height: '100%',
};
