import { yValuesKeys } from "@@types/CommonTypes";
import { Typography } from "@atoms/Typography/Typography";
import { IconManager } from "@molecules/IconManager/IconManager";
import {
  SectionWrapper,
  SkillsList,
  SkillsListSection,
  SkillsListWrapper,
  SkillsWrapper,
} from "./Skills.styled";

type SkillsProps = {
	elementOnScreen: yValuesKeys;
}

export const Skills = ({elementOnScreen}: SkillsProps) => {
  return (
    <SkillsWrapper id="Skills">
      <SkillsListSection elementOnScreen={elementOnScreen}>
        <SkillsListWrapper>
          <SectionWrapper>
            <IconManager
              fill={["dynamic"]}
              name={"Dev"}
              size={20}
            ></IconManager>
          </SectionWrapper>
          <SectionWrapper>
            <Typography.TextH2_24>Front-end Developer</Typography.TextH2_24>
            <Typography.TextH3_20>
              I like to code things from scratch
            </Typography.TextH3_20>
          </SectionWrapper>
          <SectionWrapper>
            <Typography.TextH2_24>Languages i speak:</Typography.TextH2_24>
            <SkillsList>
              <Typography.TextBullet_20>
                Html, Css, Sass
              </Typography.TextBullet_20>
              <Typography.TextBullet_20>JavaScript</Typography.TextBullet_20>
              <Typography.TextBullet_20>TypeScript</Typography.TextBullet_20>
            </SkillsList>
          </SectionWrapper>
          <SectionWrapper>
            <Typography.TextH2_24>Other technologies:</Typography.TextH2_24>
            <SkillsList>
              <Typography.TextBullet_20>React</Typography.TextBullet_20>
              <Typography.TextBullet_20>Next.js</Typography.TextBullet_20>
              <Typography.TextBullet_20>
                Styled-Components
              </Typography.TextBullet_20>
              <Typography.TextBullet_20>
                Redux / Redux Toolkit
              </Typography.TextBullet_20>
              <Typography.TextBullet_20>
                Node.js / Express
              </Typography.TextBullet_20>
              <Typography.TextBullet_20>Figma</Typography.TextBullet_20>
              <Typography.TextBullet_20>Git</Typography.TextBullet_20>
            </SkillsList>
          </SectionWrapper>
        </SkillsListWrapper>
      </SkillsListSection>
    </SkillsWrapper>
  );
};
