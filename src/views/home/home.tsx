import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, useTheme} from '@rneui/themed';
import AddTask from '@/components/add-task';
import Header from '@/components/header';
import Template from '@/components/template';
import moment from 'moment';
import {daysOfWeek, getDaysOfCurrentWeek} from '@/helpers/utils';
interface HomeScreenProps {
  navigation: any;
  route: any;
}
const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  const {theme} = useTheme();
  const [selectedDay, setSelectedDay] = useState(() => {
    const days = getDaysOfCurrentWeek();
    return days.find(day => moment().isSame(day.label, 'day'))?.id || 2;
  });

  return (
    <Template>
      <View>
        <Information selectedDay={selectedDay} />
        <DaysOfWeek setSelectedDay={setSelectedDay} selectedDay={selectedDay} />
      </View>
    </Template>
  );
};

export default HomeScreen;

interface DaysOfWeekProps {
  selectedDay: number;
  setSelectedDay: (id: number) => void;
}
const DaysOfWeek = (props: DaysOfWeekProps) => {
  const {theme} = useTheme();
  const {width: screenWidth} = useWindowDimensions();
  const renderItem = ({item: {label, id}}) => {
    const isToday = id === props.selectedDay;
    return (
      <View key={id} style={{width: screenWidth / 7}}>
        <Avatar
          size={screenWidth / 14}
          rounded
          title={label}
          titleStyle={{
            fontSize: screenWidth / 34,
            color: isToday ? theme.colors.white : theme.colors.text,
          }}
          containerStyle={{
            backgroundColor: isToday ? theme.colors.primary : 'transparent',
          }}
          onPress={() => {
            props.setSelectedDay(id);
          }}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {daysOfWeek.map(item => renderItem({item}))}
    </View>
  );
};

interface InformationProps {
  selectedDay: number;
}
const Information = (props: InformationProps) => {
  const {theme} = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
      }}>
      <View>
        <Text
          style={{color: theme.colors.text, fontWeight: 'bold', fontSize: 24}}>
          {moment(
            getDaysOfCurrentWeek().find(day => day.id === props.selectedDay)
              ?.label,
          )?.format('MMMM Do,dddd')}
        </Text>
        <Text>10 task today</Text>
      </View>
      <Avatar
        size={30}
        rounded
        title={'Ok'}
        containerStyle={{
          backgroundColor: theme.colors.primary,
        }}
      />
    </View>
  );
};
