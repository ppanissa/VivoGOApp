import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { width, height, ms, s, vs, font } from '~/utils/scale';
import styleColors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundGradient = styled(LinearGradient).attrs({
  colors: styleColors.bgLinear,
  start: { x: 0, y: 0.2 },
  end: { x: 1, y: 0.1 },
})`
  flex: 1;
  /* justify-content: space-between; */
`;

export const LoginContainer = styled.View`
  background-color: ${styleColors.bgLoginContainer};
  flex: 0.72;
  border-bottom-left-radius: ${s(50)};
  border-bottom-right-radius: ${s(50)};
  ${Platform.OS === 'ios'
    ? css`
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
        border-bottom-left-radius: ${s(50)};
        border-bottom-right-radius: ${s(50)};
      `
    : css`
        box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
      `}
`;

export const LogoContainer = styled.View`
  ${Platform.OS === 'ios'
    ? css`
        margin-top: 0px;
      `
    : css`
        margin-top: ${ms(15)};
      `}

  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  margin-top: -${height * 0.06};
  padding-right: ${ms(30)};
  padding-left: ${ms(30)};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  text-align: center;
  font-family: 'montserrat-regular';
  font-weight: 600;
  font-size: ${ms(15)};
  color: ${styleColors.warning2};
`;

export const HelperContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: ${ms(20)};
`;

export const HelperText = styled.Text`
  font-size: ${width * 0.016};
  color: rgba(255, 255, 255, 0.5);
  font-family: 'montserrat-regular';
`;

export const FormContainer = styled.View`
  flex: 1;
  padding-right: ${ms(35)};
  padding-left: ${ms(35)};
  margin-top: ${Math.round(vs(40))};
`;

export const ButtonLoginView = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${Math.round(vs(-30))};
  /* padding: 0 60px; */
  padding-right: ${ms(50)};
  padding-left: ${ms(50)};
  justify-content: center;
  align-items: center;
  height: ${vs(55)};
  width: 100%;
`;

export const InfoContainer = styled.View`
  flex: 0.28;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;
export const InfoItem = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
`;

export const ButtonOpen = styled(RectButton)`
  margin: 5px;
`;

export const CopyrightText = styled.Text`
  font-size: ${width * 0.013};
  color: ${styleColors.white};
`;
