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

const ExtraView = ({ textMsg, textContent }) => (
  <StyledExtraView>
    <StyledExtraText>{textMsg}</StyledExtraText>
    <TextLink>
      <TextLinkContent>{textContent}</TextLinkContent>
    </TextLink>
  </StyledExtraView>
);

export default ExtraView;
