import { atom } from "recoil";

export const statusAtom = atom({
  key: "statusAtom",
  default: { status: "", message: "", title: "" },
});
