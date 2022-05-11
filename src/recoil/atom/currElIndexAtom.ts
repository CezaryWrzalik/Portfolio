import { SectionIndexes } from "@@types/CommonTypes";
import { atom } from "recoil";

export const currElIndexAtom = atom({
  key: "currElIndexAtom",
  default: 0 as SectionIndexes,
});