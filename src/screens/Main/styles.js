import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { font, ms } from '~/utils/scale';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bgPrimary};
`;

export const ListWrapper = styled.SafeAreaView`
  /* margin-top: ${ms(5)}; */
  margin-right: ${ms(10)};
  margin-left: ${ms(10)};
  flex: 1;
  padding: 0;
  background-color: ${colors.bgPrimary};
`;

export const GroupContainer = styled.View`
  margin-top: 20px;
`;
export const GroupTitleContainer = styled.View`
  padding: 0 20px;
  flex-direction: row;
`;
export const GroupTitleDate = styled.Text`
  font-family: 'montserrat-bold';
  font-size: 20px;
  color: ${colors.primary60};
  text-transform: uppercase;
`;
export const GroupTitleWeek = styled.Text`
  margin-left: 10px;
  font-family: 'montserrat-light';
  font-size: 20px;
  color: ${colors.primary60};
  text-transform: uppercase;
`;

export const ItemContainer = styled.View`
  width: 100%;
  padding-top: ${ms(5)};
  padding-bottom: ${ms(5)};
  margin: 0;
`;

export const ItemButton = styled(RectButton).attrs({
  activeOpacity: 0.05,
  rippleColor: colors.primary50,
})`
  flex-direction: row;
  border-radius: ${ms(5)};
  padding-top: ${ms(10)};
  padding-right: ${ms(15)};
  padding-bottom: ${ms(10)};
  padding-left: ${ms(10)};
  align-items: center;
`;

export const ItemIcon = styled.View`
  flex: 0.1;
`;
export const ItemInfo = styled.View`
  flex: 0.9;
  flex-direction: column;
  flex-wrap: nowrap;
`;
export const ItemTitle = styled.Text`
  font-family: 'montserrat-bold';
  color: ${colors.primary60};
  text-align: justify;
  flex-wrap: nowrap;
  font-size: ${font(12)};
  text-transform: uppercase;
`;
export const ItemDesc = styled.Text`
  font-family: 'montserrat-regular';
  font-size: ${font(12)};
  color: ${colors.primary60};
`;
