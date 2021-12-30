import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { defaultTheme as theme } from './theme/default/index';
import {
  useFonts as useRoboto,
  Roboto_300Light,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';

import RootStack from './navigation/root';

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
        <RootStack />
      </ThemeProvider>
    </>
  );
}
