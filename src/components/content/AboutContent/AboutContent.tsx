import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { Button } from "@atoms/Button/Button";
import { Typography } from "@atoms/Typography/Typography";
import { FirstLoadAnimation } from "@organisms/FirstLoadAnimations/FirstLoadAnimation";
import { sections } from "@shared/constants";
import { useSetRecoilState } from "recoil";
import { ButtonWrapper } from "./AboutContent.styled";

export const AboutContent = () => {
  const setCurrElIndex = useSetRecoilState(currElIndexAtom);

  return (
    <>
      <FirstLoadAnimation
        section={sections.about}
        delay={1}
        animation={"slideTop"}
      >
        <Typography.TextH1_96>About</Typography.TextH1_96>
      </FirstLoadAnimation>
      <FirstLoadAnimation
        section={sections.about}
        delay={2}
        animation={"slideTop"}
      >
        <Typography.TextBody_16>
          Hello! My name is Czarek im a <b>Front-end Developer</b> located in
          Poland. Making websites is my passion.
        </Typography.TextBody_16>
      </FirstLoadAnimation>
      <FirstLoadAnimation
        section={sections.about}
        delay={3}
        animation={"slideTop"}
      >
        <Typography.TextBody_16>
          I’ve started my adventure with programming in 2018 by making my first
          bank app in Python and MySQL but quickly after that i switched into
          Html and JavaScript. For over 2 years i was learning this language by
          writing all kind of applications like games, weather apps forums or
          shops and implementing new technologies into them.
        </Typography.TextBody_16>
      </FirstLoadAnimation>
      <FirstLoadAnimation
        section={sections.about}
        delay={4}
        animation={"slideTop"}
      >
        <Typography.TextBody_16>
          Well-organised person and a problem solver. Besides programming, im
          also fascinated in astronomy. Fan of F1, climbing, cycling and
          computer games.
        </Typography.TextBody_16>
      </FirstLoadAnimation>
      <FirstLoadAnimation
          section={sections.about}
          delay={5}
          animation={"slideTop"}
        >
          <ButtonWrapper>
            <Button variant="primary" onClick={() => setCurrElIndex(sections.contact)}>
              Contact me
            </Button>
          </ButtonWrapper>
        </FirstLoadAnimation>
    </>
  );
};
