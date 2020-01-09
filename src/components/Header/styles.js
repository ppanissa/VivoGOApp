import styled from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '~/styles/colors';

export const HeaderWrapper = styled.View`
  width: 100%;
  height: auto;
  background-color: ${colors.grey60};
  padding: 20px;
`;

export const HeaderText = styled.Text`
  color: ${colors.primary60};
  font-family: 'montserrat-bold';
  font-size: ${Platform.OS === 'ios' ? '13px' : '15px'};
  font-weight: 500;
  text-transform: uppercase;
`;
