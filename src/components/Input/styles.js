import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.01);
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
`;
export const TextInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: 'rgba(255,255,255, 0.6)',
  secureTextEntry: props.password,
}))`
  flex: 1;
  font-size: 15px;
  font-family: 'montserrat-regular';
  font-weight: bold;
  margin-left: 10px;
  color: ${colors.white};
`;
