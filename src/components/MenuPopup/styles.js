import styled from 'styled-components/native';
import { Menu } from 'react-native-popup-menu';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.01);
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
`;

export const Select = styled(Menu)`
  width: 100%;
  padding: 10px 0;
  margin-left: 10px;
`;

export const Text = styled.Text`
  padding: 5px 10px;
`;
