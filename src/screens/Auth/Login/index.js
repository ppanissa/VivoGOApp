import React, { useEffect, useState, useRef } from 'react';
import { StatusBar, KeyboardAvoidingView, Platform } from 'react-native';

import { Linking, Notifications, ScreenOrientation } from 'expo';
import { deviceName as expoDeviceName } from 'expo-device';
import { useDispatch, useSelector } from 'react-redux';
// Dispatchs
import { authRequest } from '~/store/modules/auth/actions';
import { statusBarHide } from '~/store/modules/settings/actions';

// Utils
import estados from '~/utils/ufs';
// Components
import Logo from '~/components/Svg/Logo';
import Before from '~/components/Svg/Before';
import Twitter from '~/components/Svg/Twitter';
import Facebook from '~/components/Svg/Facebook';
import Instagram from '~/components/Svg/Instagram';

import SelectMenu from '~/components/MenuPopup';
import Input from '~/components/Input';
import ButtonGradient from '~/components/Buttons/ButtonGradient';
import {
  Container,
  BackgroundGradient,
  LoginContainer,
  LogoContainer,
  TextContainer,
  Text,
  HelperContainer,
  HelperText,
  FormContainer,
  ButtonLoginView,
  InfoContainer,
  InfoItem,
  ButtonOpen,
  CopyrightText,
} from './styles';

const Login = () => {
  // Dispatch for Action Redux
  const dispatch = useDispatch();
  // Get State Redux
  const loading = useSelector(state => state.auth.loading);
  // Ref
  const passwordRef = useRef();

  const [height, setHeight] = useState(0);

  const [ufs] = useState(estados());
  const [login, setLogin] = useState('before.andressa');
  const [senha, setSenha] = useState('teste652');
  const [uf, setUF] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [deviceToken, setDeviceToken] = useState(null);

  useEffect(() => {
    async function initSettings() {
      await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);

      const tokenExpo = await Notifications.getExpoPushTokenAsync();

      setDeviceToken(tokenExpo);
      setDeviceName(expoDeviceName);

      dispatch(statusBarHide(true));
    }
    initSettings();
  }, [dispatch]);

  const handleOpenLinkTwitter = async () => {
    const supported = await Linking.canOpenURL('twitter://beforeti');
    if (supported) {
      Linking.openURL('twitter://beforeti');
    } else {
      Linking.openURL('https://www.twitter.com/beforeti');
    }
  };

  const handleOpenLinkFacebook = async () => {
    const supported = await Linking.canOpenURL('fb://profile/beforeTI');
    if (supported) {
      Linking.openURL('fb://profile/beforeTI');
    } else {
      Linking.openURL('https://www.facebook.com/beforeTI');
    }
  };

  const handleOpenLinkInstagram = async () => {
    const supported = await Linking.canOpenURL(
      'instagram://user?username=before.ti'
    );
    if (supported) {
      Linking.openURL('instagram://user?username=before.ti');
    } else {
      Linking.openURL('https://www.instagram.com/before.ti/');
    }
  };

  const handleOpenLinkBefore = () => {
    Linking.openURL('https://before.com.br');
  };

  const handleSubmit = () => {
    const device = {
      deviceName,
      deviceToken,
    };
    dispatch(authRequest(login, senha, uf, device));
  };

  return (
    <>
      <StatusBar hidden />
      <Container
        onLayout={e => {
          setHeight(e.nativeEvent.layout.height);
        }}
      >
        <BackgroundGradient height={height}>
          <LoginContainer>
            <LogoContainer>
              <Logo width="70%" height="200" />
            </LogoContainer>
            <TextContainer>
              <Text>
                Bem-vindo ao software de gestão de revendas SysCor Vivo GO
              </Text>
            </TextContainer>
            <FormContainer>
              <KeyboardAvoidingView style={{ flex: 1 }} behavior={null} enabled>
                <SelectMenu
                  icon="pin"
                  data={ufs}
                  labelText="Selecione Estado"
                  onSelectOption={setUF}
                />
                <Input
                  style={{ marginTop: 10 }}
                  icon="account"
                  placeholder="Email / Senha"
                  autoCorrect={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  value={login}
                  onChangeText={setLogin}
                  onSubmitEditing={() => passwordRef.current.focus()}
                />
                <Input
                  style={{ marginTop: 10 }}
                  password
                  icon="lock-outline"
                  placeholder="Senha"
                  autoCorrect={false}
                  autoCapitalize="none"
                  returnKeyType="send"
                  value={senha}
                  onChangeText={setSenha}
                  onSubmitEditing={handleSubmit}
                  ref={passwordRef}
                />
                <HelperContainer>
                  <ButtonOpen>
                    <HelperText>Esqueci minha senha</HelperText>
                  </ButtonOpen>
                  <HelperText>|</HelperText>
                  <ButtonOpen>
                    <HelperText>Desbloquear senha</HelperText>
                  </ButtonOpen>
                </HelperContainer>
              </KeyboardAvoidingView>
            </FormContainer>
            <ButtonLoginView>
              <ButtonGradient
                name="entrar"
                upper
                onPress={handleSubmit}
                loading={loading}
              />
            </ButtonLoginView>
          </LoginContainer>
          <InfoContainer>
            <InfoItem>
              <ButtonOpen onPress={handleOpenLinkTwitter}>
                <CopyrightText>
                  <Twitter
                    width={Platform.OS === 'ios' ? '20px' : '15px'}
                    height={Platform.OS === 'ios' ? '20px' : '15px'}
                  />
                </CopyrightText>
              </ButtonOpen>
              <ButtonOpen onPress={handleOpenLinkFacebook}>
                <CopyrightText>
                  <Facebook
                    width={Platform.OS === 'ios' ? '20px' : '15px'}
                    height={Platform.OS === 'ios' ? '20px' : '15px'}
                  />
                </CopyrightText>
              </ButtonOpen>
              <ButtonOpen onPress={handleOpenLinkInstagram}>
                <CopyrightText>
                  <Instagram
                    width={Platform.OS === 'ios' ? '20px' : '15px'}
                    height={Platform.OS === 'ios' ? '20px' : '15px'}
                  />
                </CopyrightText>
              </ButtonOpen>
            </InfoItem>
            <InfoItem>
              <CopyrightText>
                Copyright © 2019 | Todos os direitos reservados - SysCor
              </CopyrightText>
            </InfoItem>
            <InfoItem
              style={{ paddingBottom: Platform.OS === 'ios' ? 10 : 30 }}
            >
              <ButtonOpen onPress={handleOpenLinkBefore}>
                <Before width="100px" height="40px" />
              </ButtonOpen>
            </InfoItem>
          </InfoContainer>
        </BackgroundGradient>
      </Container>
    </>
  );
};

export default Login;
