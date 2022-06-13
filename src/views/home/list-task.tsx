import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@rneui/themed';
import {useTasks} from '@/provider/task';
const ListTask = () => {
  const {theme} = useTheme();
  const task = useTasks();
  console.log('task', task);
  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Text style={{color: theme.colors.primary}}>ListTask component</Text>
    </View>
  );
};

export default ListTask;
