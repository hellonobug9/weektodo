import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@rneui/themed';
const HomeScreen = () => {
  const {theme} = useTheme();
  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Text style={{color: theme.colors.primary}}>HomeScreen component</Text>
    </View>
  );
};

export default HomeScreen;
