import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.ScrollView``;

export const ProfileBackground = styled.ImageBackground`
  width: undefined;
  padding: 30px 16px 5px;
`;
export const ProfileContainer = styled.View`
  ${Platform.OS === 'android'
    ? css`
        margin-top: 20px;
      `
    : null}
  width: 100%;
  align-items: center;
`;

export const ProfileAvatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 2px;
  border-color: #fff;
`;

export const ProfileName = styled.Text`
  color: #fff;
  font-size: 20;
  font-family: 'montserrat-bold';
  margin-vertical: 8px;
`;

export const LogoutContainer = styled.View`
  flex-direction: row;
  margin: 10px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  margin: 30px 10px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const LogoutText = styled.Text`
  color: #fff;
  font-size: 20;
  font-family: 'montserrat-bold';
  margin-right: 15px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;
