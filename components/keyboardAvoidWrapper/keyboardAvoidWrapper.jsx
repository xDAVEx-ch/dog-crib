import React from 'react';
import {
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

const KeyboardAvoid = ({ children }) => (
  <KeyboardAvoidingView>
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </ScrollView>
  </KeyboardAvoidingView>
);

export default KeyboardAvoid;
