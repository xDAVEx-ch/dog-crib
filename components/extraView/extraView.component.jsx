import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

const StyledExtraView = styled(View)`
  flex-direction: row;
  margin: 15px 0;
  justify-content: space-between;
`;

const StyledExtraText = styled(Text)`
  width: 70%;
  color: black;
`;

const TextLink = styled(TouchableOpacity)`
  width: 100%;
`;

const TextLinkContent = styled(Text)`
  width: 100%;
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
`;

const ExtraView = ({ textMsg, textContent, navigation }) => {
  let pageName = 'Signup';

  if (textContent === 'Login') {
    pageName = 'Login';
  }

  return (
    <StyledExtraView>
      <StyledExtraText>{textMsg}</StyledExtraText>
      <TextLink onPress={() => navigation.navigate(pageName)}>
        <TextLinkContent>{textContent}</TextLinkContent>
      </TextLink>
    </StyledExtraView>
  );
};

export default ExtraView;
