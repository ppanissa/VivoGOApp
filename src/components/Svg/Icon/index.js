import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import iconFile from './icons';
import notFound from './icons/caixa.svg';

export default function Icon({ name, width, height }) {
  const [icon, setIcon] = useState(notFound);

  useEffect(() => {
    async function findIcon() {
      const fileIcon = null; // await iconFile(name);

      if (fileIcon) {
        setIcon(icon);
      }
    }
    findIcon();

    // Unmounted
    return () => {
      setIcon(null);
    };
  }, [icon, name]);

  return icon ? <SvgXml xml={icon} width={width} height={height} /> : null;
}

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Icon.defaultProps = {
  name: 'venda',
  width: '100%',
  height: '100%',
};
