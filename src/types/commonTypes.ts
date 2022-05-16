import * as Icons from "@shared/svgs";
import defaultTheme from "@shared/theme/default.theme";
import { projectsData } from "@content/ProjectContent/projectsData";
import { menuItems } from "@shared/constants";

export enum Theme {
  DEFAULT = "DEFAULT",
}


export type ThemeType = typeof defaultTheme;
export type ColorType = keyof ThemeType["colors"]["icons"];
export type ProjectDataType = typeof projectsData[0];
export type IconName = keyof typeof Icons;

export type ButtonVariants = "primary" | "secondary" | "teritary";

export type SectionIndexes = 0 | 1 | 2 | 3 | 4;
export type SectionsType = {
  home: 0;
  about: 1;
  skills: 2;
  projects: 3;
  contact: 4;
};
export type menuItemsKeys = typeof menuItems;

export type AnimationTypes = "slideTop" | "opacity";

export type CurrElIndexProps = {
  currElIndex: SectionIndexes
}