import React from 'react';

import Login from './screens/login/login.screen';
import Signup from './screens/signup/signup.screen';
import Welcome from './screens/welcome/welcome.screen';

import { ThemeProvider } from 'styled-components/native';
import { defaultTheme as theme } from './theme/default/index';
import {
  useFonts as useRoboto,
  Roboto_300Light,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';

export default function App() {
  const [bodyRobotoLoaded] = useRoboto({
    Roboto_300Light,
  });

  const [headingRobotoLoaded] = useRoboto({
    Roboto_500Medium,
  });

  if (!bodyRobotoLoaded || !headingRobotoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Welcome />
      </ThemeProvider>
    </>
  );
}
