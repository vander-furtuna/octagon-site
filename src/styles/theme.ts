const palette = {
    white: '#fff',
    black: '#000',
    primary_100: '#FFD363',
    primary_300: '#F4B148',
    primary_500: '#C78814',
    primary_700: '#FF7701',
    primary_900: '#522601',

    gray700: '#282828',
    gray900: '#1F1F1F',
    gray950: '#1A1A1A',

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
        light: palette.white,
        bold: palette.gray900,
        primary: palette.primary_300,
    },
    nav_items: {
        color: palette.primary_300,
        hover: palette.primary_500,
        underline: palette.primary_700,
    },
    background: {
        light: palette.gray700,
        bold: palette.gray900,
        black: palette.gray950,
        primary: palette.primary_300,
        primary_hover: palette.primary_100,
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
    borderRadius: '0.25rem',
};

export type ThemeType = typeof Theme;
