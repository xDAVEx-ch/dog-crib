import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components/native';

const StyledLine = styled(View)`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.ui.secondary};
  margin-vertical: 10px;
`;

const Line = () => <StyledLine />;

export default StyledLine;
