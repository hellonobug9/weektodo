import {Screens} from '@/navigation/interfaces';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
interface IRoutes {
  key: string;
  name: string;
  params?: any;
  path?: any;
}
interface BottomTabIconProps {
  route: IRoutes;
  color: string;
  size: number;
}

const BottomTabIcon = ({route, color, size}: BottomTabIconProps) => {
  const {name} = route;
  const iconName = React.useMemo(() => {
    switch (name) {
      case Screens.Home:
        return 'home';
      case Screens.Notification:
        return 'notification';
      case Screens.User:
        return 'user';
      case Screens.Notification:
        return 'rocket1';
      default:
        return 'rocket1';
    }
  }, [name]);
  return (
    <>
      <Icon color={color} name={iconName} size={size} />
    </>
  );
};

export default BottomTabIcon;
