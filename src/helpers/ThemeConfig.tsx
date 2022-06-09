import {createTheme} from '@rneui/themed';

export const theme = createTheme({
  // Button: {
  //   raised: true,
  // },
  lightColors: {
    background: '#f6fafb',
    primary: '#ff7562',
    text: '#3c3433',
  },
});

export enum RNEDefaultTheme {
  Light = 'light',
  Dark = 'dark',
}
