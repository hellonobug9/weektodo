import {View} from 'react-native';
import React from 'react';
import {useTheme, Text} from '@rneui/themed';
import {Avatar} from '@rneui/base';
const Header = () => {
  const {theme} = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text
          style={{color: theme.colors.text, fontWeight: 'bold', fontSize: 24}}>
          Hi Rakib
        </Text>
        <Text style={{color: theme.colors.primary}}>10 task pending</Text>
      </View>
      <Avatar
        size={35}
        rounded
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
        }}
      />
    </View>
  );
};

export default Header;
