import {View, Text} from 'react-native';
import React from 'react';
import {Button, useThemeMode, useTheme} from '@rneui/themed';
const HomeScreen = () => {
  const {mode, setMode} = useThemeMode();
  const {theme} = useTheme();
  console.log('theme', theme);
  return (
    <View>
      <Text>HomeScreen component</Text>
      <Button onPress={() => setMode('dark')} title={mode} />
    </View>
  );
};

export default HomeScreen;
