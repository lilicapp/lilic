import {DefaultTheme} from 'react-native-paper';

export const constants = {
  PRIMARY_COLOR: '#212121',
  SECONDARY_COLOR: '#484848',
  TERTIARY_COLOR: '#2f95dc',
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 16,
  FONT_WEIGHT_LIGHT: '200',
  FONT_WEIGHT_MEDIUM: '500',
  FONT_WEIGHT_BOLD: '700',
  BACKGROUND_COLOR_APP: '#fff',
  CONTAINER_PADDING: 20
};

export const colors = {
  primary: constants.PRIMARY_COLOR,
  secondary: constants.SECONDARY_COLOR,
  tertiary: constants.TERTIARY_COLOR,
  white: constants.BACKGROUND_COLOR_APP,
  blue: '#4285F4',
  red: '#DB4437',
  darkred: '#a32015',
  yellow: '#F4B400',
  green: '#0F9D58',
};

export const themeProviderStyles = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    accent: colors.white,
    backdrop: colors.white,
    surface: colors.white,
    primary: colors.primary,
    background: colors.white,
    text: colors.primary,
    placeholder: colors.primary,
  },
  TextInput: {
    style: {
      underlineColor: 'blue'
    }
  }
};