import { Typography } from "@atoms/Typography/Typography";
import { IconManager } from "@molecules/IconManager/IconManager";
import { ContentWrapper, SkillsList } from "./SkillsContent.styled";

const languages = ["Html, Css, Sass", "JavaScript", "TypeScript"];
const technologies = ["React", "Next.js" , "Styled-Components", "Redux / Redux Toolkit", "Node.js, Express", "Figma", "Git"]

export const SkillsContent = () => {
  return (
    <>
      <ContentWrapper>
        <IconManager fill={["dynamic"]} name={"Dev"} size={20}></IconManager>
      </ContentWrapper>
      <ContentWrapper>
        <Typography.TextH2_24><Typography.TextDyanmicColor>Front-end Developer<Typography.TextDyanmicColor /></Typography.TextDyanmicColor></Typography.TextH2_24>
        <Typography.TextH3_20>
          I like to code things from scratch
        </Typography.TextH3_20>
      </ContentWrapper>
      <ContentWrapper>
        <Typography.TextH2_24><Typography.TextDyanmicColor>Languages i speak:</Typography.TextDyanmicColor></Typography.TextH2_24>
        <SkillsList>
          {languages.map((language) => (
            <Typography.TextBullet_20>{language}</Typography.TextBullet_20>
          ))}
        </SkillsList>
      </ContentWrapper>
      <ContentWrapper>
        <Typography.TextH2_24><Typography.TextDyanmicColor>Other technologies:</Typography.TextDyanmicColor></Typography.TextH2_24>
        <SkillsList>
          {technologies.map((technology) => (
            <Typography.TextBullet_20>{technology}</Typography.TextBullet_20>
          ))}
        </SkillsList>
      </ContentWrapper>
    </>
  );
};
