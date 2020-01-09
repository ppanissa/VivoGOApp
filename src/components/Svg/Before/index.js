import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import logo from './before.svg';

export default function Before({ width, height }) {
  return <SvgXml xml={logo} width={width} height={height} />;
}

Before.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Before.defaultProps = {
  width: '100%',
  height: '100%',
};
