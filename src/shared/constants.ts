import { SectionsType } from "@@types/CommonTypes";

export const breakpoints = {
  xs: 400,
  sm: 650,
  md: 1040,
  lg: 1400,
  xl: 1800,
};

export const dynamicColors = [
  "ED6A5A",
  "4178d1",
  "43d141",
  "b4bd15",
  "d964cb",
  "6bd1b1",
];

export const sections: SectionsType = {
  home: 0,
  about: 1,
  skills: 2,
  projects: 3,
  contact: 4,
};

export const menuItems = [
  { name: "Home", id: sections.home },
  { name: "About", id: sections.about },
  { name: "Skills", id: sections.skills },
  { name: "Projects", id: sections.projects },
  { name: "Contact", id: sections.contact },
];

export const zIndexes = {
	home: 0,
	about: 2,
	skills: 4,
	projects: 6,
  projectsPlus: 7,
	contact: 8,
  layout: 10,
  max: 12,
}
