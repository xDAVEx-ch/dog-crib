import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

const StyledTextInput = styled(TextInput)`
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.ui.secondary};
  padding: 15px;
  border-radius: 5px;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.text.primary};
`;

const StyledInputLabel = styled(Text)`
  text-align: left;
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

const FormInput = ({ labelText, isDate, showDatePicker, ...otherProps }) => (
  <View>
    <StyledInputLabel>{labelText}</StyledInputLabel>
    {!isDate ? (
      <StyledTextInput {...otherProps} />
    ) : (
      <TouchableOpacity onPress={showDatePicker}>
        <StyledTextInput {...otherProps} />
      </TouchableOpacity>
    )}
  </View>
);

export default FormInput;
