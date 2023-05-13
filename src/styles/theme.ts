const palette = {
  white: '#fff',
  black: '#000',
  primary_300: '#F4B148',
  primary_500: '#C78814',
  primary_700: '#FF7701',
  primary_900: '#522601',

  gray700: '#282828',
  gray900: '#1F1F1F',

  green500: '#77FF95',
  blue500: '#59AFFF',
  pink500: '#FF357E',
};

export const Theme = {
  title: {
    color: palette.primary_300,
    underline: palette.primary_700,
  },
  text: {
    color: palette.white,
  },
  background: {
    light: palette.gray700,
    bold: palette.gray900,
    primary: palette.primary_300,
  },
  outline: {
    primary: palette.primary_300,
  },
  social_media: {
    email: palette.blue500,
    instagram: palette.pink500,
    phone: palette.green500,
  },
  icon: {
    light: palette.white,
    primary: palette.primary_300,
  },
};

export type ThemeType = typeof Theme;
