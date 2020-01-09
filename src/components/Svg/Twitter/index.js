import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import logo from './twitter.svg';

export default function Twitter({ width, height }) {
  return <SvgXml xml={logo} width={width} height={height} />;
}

Twitter.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Twitter.defaultProps = {
  width: 'auto',
  height: '100%',
};
