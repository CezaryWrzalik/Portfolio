import { Typography } from "@atoms/Typography/Typography";
import { IconManager } from "@molecules/IconManager/IconManager";
import { ContentWrapper, SkillsList } from "./SkillsContent.styled";

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
          <Typography.TextBullet_20>Html, Css, Sass</Typography.TextBullet_20>
          <Typography.TextBullet_20>JavaScript</Typography.TextBullet_20>
          <Typography.TextBullet_20>TypeScript</Typography.TextBullet_20>
        </SkillsList>
      </ContentWrapper>
      <ContentWrapper>
        <Typography.TextH2_24><Typography.TextDyanmicColor>Other technologies:</Typography.TextDyanmicColor></Typography.TextH2_24>
        <SkillsList>
          <Typography.TextBullet_20>React</Typography.TextBullet_20>
          <Typography.TextBullet_20>Next.js</Typography.TextBullet_20>
          <Typography.TextBullet_20>Styled-Components</Typography.TextBullet_20>
          <Typography.TextBullet_20>
            Redux / Redux Toolkit
          </Typography.TextBullet_20>
          <Typography.TextBullet_20>Node.js / Express</Typography.TextBullet_20>
          <Typography.TextBullet_20>Figma</Typography.TextBullet_20>
          <Typography.TextBullet_20>Git</Typography.TextBullet_20>
        </SkillsList>
      </ContentWrapper>
    </>
  );
};
