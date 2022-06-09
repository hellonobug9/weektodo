import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/views/home';
import {useMainTheme} from '@/hooks/useMainTheme';
import NotificationScreen from '@/views/notification';
import {Screens} from './interfaces';
import UserScreen from '@/views/user';
import NewsScreen from '@/views/news';
import BottomTabIcon from '@/components/bottomtab-icon';
import AddTask from '@/components/add-task';
import Icon from 'react-native-vector-icons/AntDesign';
import {View} from 'react-native';
import {Text, useTheme} from '@rneui/themed';
function RootNavigator() {
  useMainTheme();
  const Tab = createBottomTabNavigator();
  const {theme} = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => (
            <BottomTabIcon route={route} color={color} size={size} />
          ),
        })}>
        <Tab.Screen
          name={Screens.Home}
          options={{
            headerShown: false,
          }}>
          {props => {
            const {navigation, route} = props;
            return (
              // <TasksProvider user={user} projectPartition={projectPartition}>
              <HomeScreen navigation={navigation} route={route} />
              // </TasksProvider>
            );
          }}
        </Tab.Screen>
        <Tab.Screen name={Screens.Menu} component={UserScreen} />
        <Tab.Screen
          name={Screens.Notification}
          component={NotificationScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({}) => <AddTask />,
          }}
        />
        <Tab.Screen name={Screens.User} component={UserScreen} />
        <Tab.Screen name={Screens.News} component={NewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
