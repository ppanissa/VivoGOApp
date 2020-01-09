import styled from 'styled-components/native';
import colors from '~/styles/colors';
import { font, vs, ms } from '~/utils/scale';

export const Container = styled.View`
  flex: 1;
  padding-left: ${vs(20)};
`;

export const Header = styled.View`
  padding-top: ${vs(15)};
  padding-right: ${vs(30)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: 'montserrat-bold';
  font-size: ${font(16)};
  color: ${colors.primary60};
`;

export const HeaderOptions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonOption = styled.TouchableOpacity``;

export const WrapperScroll = styled.ScrollView`
  height: auto;
  width: auto;
  margin-bottom: 10px;
`;

export const SideMenu = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;
