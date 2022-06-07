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

function RootNavigator() {
  useMainTheme();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => (
            <BottomTabIcon route={route} color={color} size={size} />
          ),
        })}>
        <Tab.Screen name={Screens.Home} component={HomeScreen} />
        <Tab.Screen
          name={Screens.Notification}
          component={NotificationScreen}
        />
        <Tab.Screen name={Screens.User} component={UserScreen} />
        <Tab.Screen name={Screens.News} component={NewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
