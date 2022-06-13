import {View, Text, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {Avatar, useTheme} from '@rneui/themed';
import Template from '@/components/template';
import moment from 'moment';
import {daysOfWeek, getDaysOfCurrentWeek} from '@/helpers';
import ListTask from './list-task';
interface HomeScreenProps {
  navigation: any;
  route: any;
}
const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  // const {theme} = useTheme();
  const [selectedDayId, setSelectedDayId] = useState(() => {
    const days = getDaysOfCurrentWeek();
    return days.find(day => moment().isSame(day.label, 'day'))?.id || 2;
  });

  return (
    <Template>
      <Information selectedDayId={selectedDayId} />
      <DaysOfWeek
        setSelectedDayId={setSelectedDayId}
        selectedDayId={selectedDayId}
      />
      <ListTask />
    </Template>
  );
};

export default HomeScreen;

interface DaysOfWeekProps {
  selectedDayId: number;
  setSelectedDayId: (id: number) => void;
}
const DaysOfWeek = (props: DaysOfWeekProps) => {
  const {theme} = useTheme();
  const {width: screenWidth} = useWindowDimensions();
  const renderItem = ({label, id}) => {
    const isToday = id === props.selectedDayId;
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
            props.setSelectedDayId(id);
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
      {daysOfWeek.map(renderItem)}
    </View>
  );
};

interface InformationProps {
  selectedDayId: number;
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
          {getDaysOfCurrentWeek()
            .find(day => day.id === props.selectedDayId)
            ?.label?.format('MMMM Do,dddd')}
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
