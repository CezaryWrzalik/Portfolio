import { global, palette } from "./config";

const defaultTheme = {
  colors: {
    body: {
      bgPrimary: palette.dark_gray,
      bgSecondary: palette.dynamic,
      bgTeritary: palette.dark_white,
    },
    layout: {
      bgPrimary: palette.black_gray,
      borderPrimary: palette.gray,
      textPrimary: palette.light_gray,
    },
    button: {
      textPrimary: palette.white,
      border: palette.dynamic,
      bgPrimary: palette.dynamic,
      textSecondary: palette.dynamic,
    },
    text: {
      primary: palette.white,
      secondary: palette.gray,
      tertiary: palette.light_gray,
      dynamic: palette.dynamic,
    },
    input: {
      bgPrimary: palette.dark_gray,
      textPrimary: palette.dark_white,

      error: palette.red_orange,
    },
    list: {
      markColor: palette.dynamic,
    },
    icons: {
      error: palette.red_orange,
      dynamic: palette.dynamic,
    },
    dynamic: palette.dynamic,

    // This color
  },
  ...global,
};

export default defaultTheme;
