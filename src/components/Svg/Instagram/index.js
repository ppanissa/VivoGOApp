import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import logo from './instagram.svg';

export default function Instagram({ width, height }) {
  return <SvgXml xml={logo} width={width} height={height} />;
}

Instagram.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Instagram.defaultProps = {
  width: 'auto',
  height: '100%',
};
