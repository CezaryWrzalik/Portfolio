import { global, palette } from "./config";

const defaultTheme = {
  colors: {
    body: {
      primary: palette.white
    },
  },
  ...global,
};

export default defaultTheme;