import { menuItemsShared } from "@shared/constants";
import * as Icons from "@shared/svgs";
import defaultTheme from "../shared/theme/default.theme";

export enum Theme {
  DEFAULT = "DEFAULT",
}

export type ThemeType = typeof defaultTheme;
export type ColorType = keyof ThemeType["colors"]["icons"];
export type ItemsType = typeof menuItemsShared;
export type IconName = keyof typeof Icons;

export type ButtonVariants = "primary" | "secondary" | "teritary";
 
