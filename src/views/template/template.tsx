import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@rneui/themed';
const Template = () => {
  const {theme} = useTheme();
  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Text style={{color: theme.colors.primary}}>Template component</Text>
    </View>
  );
};

export default Template;
