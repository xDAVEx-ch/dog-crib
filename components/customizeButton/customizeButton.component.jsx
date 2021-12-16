import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styled from 'styled-components/native';

const StyledButton = styled(TouchableOpacity)`
  padding: 15px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  justify-content: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
  width: 100%;

  ${({ theme, isGoogle }) =>
    isGoogle &&
    `
      background-color: ${theme.colors.bg.google};
      align-items: center;
      flex-direction: row;
  `}
`;

const ButtonText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.secondary};
  text-align: center;
  width: ${({ isGoogle }) => (isGoogle ? '60%' : '100%')};
`;

const CustomizeButton = ({ buttonText, isGoogle, children, ...otherProps }) => (
  <StyledButton isGoogle={isGoogle}>
    {children}
    <ButtonText isGoogle={isGoogle} {...otherProps}>
      {buttonText}
    </ButtonText>
  </StyledButton>
);

export default CustomizeButton;
