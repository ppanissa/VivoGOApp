import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import IconCaixa from './icons/caixa.svg';
import IconPrimeiraChamada from './icons/primeira-chamada.svg';
import IconVenda from './icons/venda.svg';
import IconVendaCancelada from './icons/venda-cancelada.svg';

export default function NotifyIcon({ id }) {
  const switchIcon = idIcon => {
    switch (idIcon) {
      case 9:
        return <SvgXml xml={IconCaixa} />;
      case 10:
        return <SvgXml xml={IconCaixa} />;
      case 11:
        return <SvgXml xml={IconPrimeiraChamada} />;
      case 12:
        return <SvgXml xml={IconPrimeiraChamada} />;
      case 13:
        return <SvgXml xml={IconVenda} />;
      case 14:
        return <SvgXml xml={IconVendaCancelada} />;
      case 15:
        return <SvgXml xml={IconVenda} />;
      default:
        return false;
    }
  };

  return switchIcon(id);
}

NotifyIcon.propTypes = {
  id: PropTypes.number.isRequired,
};
