import { Button } from "@atoms/Button/Button";
import { Typography } from "@atoms/Typography/Typography";
import { ImageTictactoe } from "@shared/images";
import Image from "next/image";
import {
  ProjectContentButton,
  ProjectContentButtons,
  ProjectContentDescription,
  ProjectContentStage,
  ProjectContentTechnologies,
  ProjectContentTitle,
  ProjectContentWrapper,
  ProjectContentYear,
  ProjectImageWrapper,
  ProjectLimiter,
  ProjectWrapper,
} from "./Project.styled";

export const Project = () => {
  return (
    <ProjectWrapper>
      <ProjectLimiter>
        <ProjectImageWrapper>
          <Image src={ImageTictactoe} layout="fill" objectFit="contain" />
        </ProjectImageWrapper>
        <ProjectContentWrapper>
          <ProjectContentTitle>
            <Typography.TextH3_20>Tic-tac-toe</Typography.TextH3_20>
            <ProjectContentYear>2021</ProjectContentYear>
          </ProjectContentTitle>
          <ProjectContentDescription>
            Game application which alows u to play against your friend or Ai
          </ProjectContentDescription>
          <ProjectContentTechnologies>
            <Typography.TextBullet_16 marks>Next.js</Typography.TextBullet_16>
            <Typography.TextBullet_16 marks>Next Auth</Typography.TextBullet_16>
            <Typography.TextBullet_16 marks>Recoil</Typography.TextBullet_16>
            <Typography.TextBullet_16 marks>
              Styled-Compponents
            </Typography.TextBullet_16>
          </ProjectContentTechnologies>
          <ProjectContentStage>
            <Typography.TextBody_16>Application Stage:</Typography.TextBody_16>
            <Typography.TextBody_16>Finished</Typography.TextBody_16>
          </ProjectContentStage>
          <ProjectContentButtons>
            <ProjectContentButton>
              <Button>Preview</Button>
            </ProjectContentButton>
            <ProjectContentButton>
              <Button variant="secondary">Preview</Button>
            </ProjectContentButton>
          </ProjectContentButtons>
        </ProjectContentWrapper>
      </ProjectLimiter>
    </ProjectWrapper>
  );
};
