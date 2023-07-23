const palette = {
    white: '#fff',
    black: '#000',
    primary100: '#FFD363',
    primary300: '#F4B148',
    primary500: '#C78814',
    primary700: '#FF7701',
    primary900: '#522601',

    gray500: '#7D7D7D',
    gray600: '#353535',
    gray700: '#282828',
    gray900: '#1F1F1F',
    gray950: '#1A1A1A',

    green500: '#77FF95',
    blue500: '#59AFFF',
    pink500: '#FF357E',
};

export const Theme = {
    ...palette,
    title: {
        color: {
            primary: palette.primary300,
            bold: palette.gray900,
        },
        underline: {
            primary: palette.primary700,
            bold: palette.gray900,
        },
    },
    text: {
        light: palette.white,
        bold: palette.gray900,
        primary: palette.primary300,
    },
    navItems: {
        color: palette.primary300,
        hover: palette.primary500,
        underline: palette.primary700,
    },
    background: {
        thin: palette.gray600,
        light: palette.gray700,
        bold: palette.gray900,
        black: palette.gray950,
        primary: {
            light: palette.primary100,
            normal: palette.primary300,
        },
    },
    outline: {
        primary: palette.primary300,
        light: palette.gray600,
    },
    socialmedia: {
        email: palette.blue500,
        instagram: palette.pink500,
        phone: palette.green500,
    },
    icon: {
        light: palette.primary100,
        color: palette.primary300,
        background: palette.gray700,
        outline: palette.primary700,
    },
    font: {
        title: "'Bai Jamjuree', sans-serif",
        text: "'Inter', sans-serif",
    },
    borderRadius: '0.25rem',
};

export type ThemeType = typeof Theme;
