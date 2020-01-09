import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import icon from './icon.svg';
import iconWhite from './icon-white.svg';

export default function Icon({ iconColor, width, height }) {
  switch (iconColor) {
    case 'primary':
      return <SvgXml xml={icon} />;
    case 'white':
      return <SvgXml xml={iconWhite} />;
    default:
      return <SvgXml xml={icon} />;
  }
}

Icon.propTypes = {
  iconColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Icon.defaultProps = {
  iconColor: 'primary',
  width: '100%',
  height: '100%',
};
