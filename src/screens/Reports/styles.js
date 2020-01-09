import styled from 'styled-components/native';
import colors from '~/styles/colors';
import { font, ms } from '~/utils/scale';

export const Container = styled.View`
  flex: 1;
`;

export const ListWrapper = styled.SafeAreaView`
  margin-top: ${ms(30)};
  margin-right: ${ms(20)};
  margin-left: ${ms(20)};
  flex: 1;
  padding: 0;
`;

export const ItemWrapper = styled.View`
  margin-bottom: 35px;
`;

export const ItemTitle = styled.Text`
  font-family: 'montserrat-bold';
  font-size: ${font(18)};
  color: ${colors.primary60};
  text-transform: uppercase;
`;

export const ItemList = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.Text`
  font-family: 'montserrat-light';
  font-size: ${font(15)};
  color: ${colors.primary60};
`;

export const ItemButton = styled.TouchableOpacity`
  padding: 5px 15px;
  background-color: ${colors.primary};
  font-family: 'montserrat-light';
  border-radius: 6px;
`;

export const ItemButtonText = styled.Text`
  font-family: 'montserrat-bold';
  font-size: ${font(12)};
  color: ${colors.white};
`;
