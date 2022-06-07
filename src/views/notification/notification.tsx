import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@rneui/themed';
const NotificationScreen = () => {
  const {theme} = useTheme();
  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Text style={{color: theme.colors.primary}}>
        NotificationScreen component
      </Text>
    </View>
  );
};

export default NotificationScreen;
