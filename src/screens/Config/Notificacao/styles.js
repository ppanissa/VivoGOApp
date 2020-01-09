import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bgPrimary};
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const WrapperSafe = styled.SafeAreaView``;

export const TitleContainer = styled.View`
  margin: 20px 0 0 0;
`;

export const TitleText = styled.Text`
  color: ${colors.primary60};
  font-size: 16px;
  font-family: 'montserrat-bold';
  text-transform: uppercase;
`;

export const ItemWrapper = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0;
`;
export const ItemText = styled.Text`
  font-family: 'montserrat-light';
  font-size: 14px;
  color: ${colors.primary60};
`;
export const ItemSwitchContainer = styled.View`
  padding: 10px 0;
`;
