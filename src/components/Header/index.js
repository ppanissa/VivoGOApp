import React from 'react';

import { HeaderWrapper, HeaderText } from './styles';

export default function Header({ style, children }) {
  return (
    <HeaderWrapper style={style}>
      <HeaderText>{children}</HeaderText>
    </HeaderWrapper>
  );
}
