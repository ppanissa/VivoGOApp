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

export const DropDownOption = styled.View`
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  background: #fff;
`;
