import { Typography } from "@atoms/Typography/Typography";
import { IconManager } from "@molecules/IconManager/IconManager";
import { FirstLoadAnimation } from "@organisms/FirstLoadAnimations/FirstLoadAnimation";
import { sections } from "@shared/constants";
import { SkillsContentWrapper, SkillsList } from "./SkillsContent.styled";

const languages = ["Html, Css, Sass", "JavaScript", "TypeScript"];
const technologies = [
  "React",
  "Next.js",
  "Styled-Components",
  "Redux / Redux Toolkit",
  "Node.js, Express",
  "Figma",
  "Git",
];

export const SkillsContent = () => {
  return (
    <SkillsContentWrapper>
      <FirstLoadAnimation
        section={sections.skills}
        delay={1}
        animation={"slideTop"}
      >
        <IconManager fill={["dynamic"]} name={"Dev"}></IconManager>
      </FirstLoadAnimation>
      <FirstLoadAnimation
        section={sections.skills}
        delay={2}
        animation={"slideTop"}
      >
        <Typography.TextH2_24>
          <Typography.TextDyanmicColor>
            Front-end Developer
            <Typography.TextDyanmicColor />
          </Typography.TextDyanmicColor>
        </Typography.TextH2_24>
        <Typography.TextH3_20>
          I like to code things from scratch
        </Typography.TextH3_20>
      </FirstLoadAnimation>
      <FirstLoadAnimation
        section={sections.skills}
        delay={3}
        animation={"slideTop"}
      >
        <Typography.TextH2_24>
          <Typography.TextDyanmicColor>
            Languages i speak:
          </Typography.TextDyanmicColor>
        </Typography.TextH2_24>
        <SkillsList>
          {languages.map((language, i) => (
            <Typography.TextBullet_20 key={i}>
              {language}
            </Typography.TextBullet_20>
          ))}
        </SkillsList>
      </FirstLoadAnimation>
      <FirstLoadAnimation
        section={sections.skills}
        delay={4}
        animation={"slideTop"}
      >
        <Typography.TextH2_24>
          <Typography.TextDyanmicColor>
            Other technologies:
          </Typography.TextDyanmicColor>
        </Typography.TextH2_24>
        <SkillsList>
          {technologies.map((technology, i) => (
            <Typography.TextBullet_20 key={i}>
              {technology}
            </Typography.TextBullet_20>
          ))}
        </SkillsList>
      </FirstLoadAnimation>
    </SkillsContentWrapper>
  );
};
