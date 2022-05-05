import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { Button } from "@atoms/Button/Button";
import { Typography } from "@atoms/Typography/Typography";
import { sections } from "@shared/constants";
import { useSetRecoilState } from "recoil";
import {
  EmojiWrapper,
  HomeButtonWrapper,
  InfoWrapper,
  WelcomeTextWrapper,
} from "./HomeContent.styled";

export const HomeContent = () => {
  const setCurrElIndex = useSetRecoilState(currElIndexAtom);

  return (
    <WelcomeTextWrapper>
      <Typography.TextH1_64>
        Hi!<Typography.TextDyanmicColor>,</Typography.TextDyanmicColor> Hello
        <EmojiWrapper>👋</EmojiWrapper>
        <br /> I'm
        <Typography.TextDyanmicColor> Cezary </Typography.TextDyanmicColor>
        Terefere
      </Typography.TextH1_64>
      <Typography.TextH3_20>
        <Typography.TextDyanmicColor>
          FRONT-END DEVELOPER
        </Typography.TextDyanmicColor>
      </Typography.TextH3_20>
      <InfoWrapper>
        <Typography.TextBody_16>
          I’m a junior Front-end developer based in Wrocław
        </Typography.TextBody_16>
        <HomeButtonWrapper>
          <Button onClick={() => setCurrElIndex(sections.contact)}>
            Contact me!
          </Button>
        </HomeButtonWrapper>
      </InfoWrapper>
    </WelcomeTextWrapper>
  );
};
