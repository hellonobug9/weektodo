import {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {useThemeMode} from '@rneui/themed';
import {RNEDefaultTheme} from '@/helpers/ThemeReducer';
export const useMainTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {setMode} = useThemeMode();
  useEffect(() => {
    if (isDarkMode) {
      setMode(RNEDefaultTheme.Dark);
    }
  }, [setMode, isDarkMode]);
};
