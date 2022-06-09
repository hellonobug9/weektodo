import {View} from 'react-native';
import React from 'react';
import {useTheme} from '@rneui/themed';
import Header from '../header';
interface TemplateProps {
  children: any;
}
const Template = (props: TemplateProps) => {
  const {theme} = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
      }}>
      <Header />
      <View style={{flex: 1}}>{props.children}</View>
    </View>
  );
};

export default Template;
