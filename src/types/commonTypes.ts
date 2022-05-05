import * as Icons from "@shared/svgs";
import { yValues } from "@utils/hooks/useScroll";
import defaultTheme from "@shared/theme/default.theme";
import { projectsData } from "@content/ProjectContent/projectsData";

export enum Theme {
  DEFAULT = "DEFAULT",
}

export type ThemeType = typeof defaultTheme;
export type ColorType = keyof ThemeType["colors"]["icons"];
export type ProjectDataType = typeof projectsData[0];
export type IconName = keyof typeof Icons;
export type yValuesKeys = keyof typeof yValues;

export type ButtonVariants = "primary" | "secondary" | "teritary";

export type SectionsType = {
  home: 0;
  about: 1;
  skills: 2;
  projects: 3;
  contact: 4;
};
