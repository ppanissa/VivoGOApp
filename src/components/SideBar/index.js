import React from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { AntDesign as Icon } from '@expo/vector-icons';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import {
  Container,
  ProfileBackground,
  ProfileContainer,
  ProfileAvatar,
  ProfileName,
  LogoutButton,
  LogoutText,
  MenuContainer,
} from './styles';

import { authRequestLogout } from '~/store/modules/auth/actions';

export default function SideBar(props) {
  const dispatch = useDispatch();
  return (
    <Container>
      <ProfileBackground source={require('../../../assets/profile-bg.jpg')}>
        <ProfileContainer>
          <ProfileAvatar
            source={{
              uri: 'https://api.adorable.io/avatars/140/random@adorable.png',
            }}
          />
          <ProfileName>Nome Usuário</ProfileName>

          <LogoutButton
            onPress={() => {
              Alert.alert(
                'Sair',
                'Deseja mesmo sair?',
                [
                  {
                    text: 'Não',
                    onPress: () => {
                      return null;
                    },
                  },
                  {
                    text: 'Sair do Sistema',
                    onPress: async () => {
                      dispatch(authRequestLogout());
                    },
                  },
                ],
                { cancelable: false }
              );
            }}
          >
            <LogoutText>Sair</LogoutText>
            <Icon size={20} color="#fff" name="logout" />
          </LogoutButton>
        </ProfileContainer>
      </ProfileBackground>
      <MenuContainer>
        <DrawerNavigatorItems {...props} />
      </MenuContainer>
    </Container>
  );
}
