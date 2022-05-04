import { IconManager } from "@molecules/IconManager/IconManager";
import { ScrollDownTextWrapper, ScrollDownWrapper } from "./ScrollDown.styled";

export type ScrollDownProps = {
	side: "Left" | "Right"
}

export const ScrollDown = ({side}: ScrollDownProps) => {
  return (
    <ScrollDownWrapper side={side}>
      <ScrollDownTextWrapper>Scroll down</ScrollDownTextWrapper>
      <IconManager name={"Arrow"} size={20} />
    </ScrollDownWrapper>
  );
};
