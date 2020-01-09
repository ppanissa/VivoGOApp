import styled from 'styled-components/native';

export const OptionContainer = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: #000;
  padding: 5px;
`;

export const OptionWrapper = styled.View`
  margin: 15px;
  flex: 1;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonToogle = styled.TouchableOpacity`
  padding: 0 10px 10px;
`;

export const ContentScrollView = styled.ScrollView`
  margin-top: 20px;
  align-content: space-between;
  z-index: 20;
  flex: 1;
`;

export const ContentSafeArea = styled.View`
  width: 100%;
`;
