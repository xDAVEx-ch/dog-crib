import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components/native';

const StyledMsgBox = styled(View)`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const MsgBox = () => <StyledMsgBox />;

export default MsgBox;
