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
  color: black;
`;

const ExtraView = () => (
  <StyledExtraView>
    <StyledExtraText>Don't have an account?</StyledExtraText>
    <TextLink>
      <TextLinkContent>Sign Up</TextLinkContent>
    </TextLink>
  </StyledExtraView>
);

export default ExtraView;
