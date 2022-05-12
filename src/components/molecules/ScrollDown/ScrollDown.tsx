import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { IconManager } from "@molecules/IconManager/IconManager";
import { sections } from "@shared/constants";
import { useSetRecoilState } from "recoil";
import { ScrollDownTextWrapper, ScrollDownWrapper } from "./ScrollDown.styled";

export type ScrollDownProps = {
  side: "Left" | "Right";
};

export const ScrollDown = ({ side }: ScrollDownProps) => {
  const setCurrElIndex = useSetRecoilState(currElIndexAtom);
  return (
    <ScrollDownWrapper
      side={side}
      onClick={() => setCurrElIndex(sections.about)}
    >
      <ScrollDownTextWrapper>Scroll down</ScrollDownTextWrapper>
      <IconManager name={"Arrow"} size={20} />
    </ScrollDownWrapper>
  );
};
