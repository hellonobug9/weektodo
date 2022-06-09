/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import RootNavigation from '@/navigation/RootNavigator';
import {theme} from '@/helpers/ThemeConfig';
const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <RootNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

// const styles = StyleSheet.create({

// });

export default App;
