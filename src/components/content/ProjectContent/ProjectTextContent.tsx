import { Button } from "@atoms/Button/Button";
import { Typography } from "@atoms/Typography/Typography";
import { SingleProjectProps } from "@organisms/SingleProject/SingleProject";
import React from "react";
import {
  ProjectContentButton,
  ProjectContentButtons,
  ProjectContentDescription,
  ProjectContentStage,
  ProjectContentTechnologies,
  ProjectContentTitle,
  ProjectContentWrapper,
  ProjectContentYear,
} from "./ProjectContent.styled";

interface ProjectTextContentProps extends SingleProjectProps {
  mobileContentVisible: boolean;
}

export const ProjectTextContent = React.forwardRef<
  HTMLDivElement,
  ProjectTextContentProps
>(({ mobileContentVisible, projectData }, ref) => {
  const { title, year, technologies, description, stage } = projectData;

  return (
    <ProjectContentWrapper
      mobileContentVisible={mobileContentVisible}
      ref={ref}
    >
      <ProjectContentTitle>
        <Typography.TextH3_20>{title}</Typography.TextH3_20>
        <ProjectContentYear>{year}</ProjectContentYear>
      </ProjectContentTitle>
      <ProjectContentDescription>{description}</ProjectContentDescription>
      <ProjectContentTechnologies>
        {technologies.map((technology, i) => (
          <Typography.TextBullet_16 key={i} marks>{technology}</Typography.TextBullet_16>
        ))}
      </ProjectContentTechnologies>
      <ProjectContentStage>
        <Typography.TextBody_16>Application Stage:</Typography.TextBody_16>
        <Typography.TextBody_16>{stage}</Typography.TextBody_16>
      </ProjectContentStage>
      <ProjectContentButtons>
        <ProjectContentButton>
          <Button fullWidth>Preview</Button>
        </ProjectContentButton>
        <ProjectContentButton>
          <Button variant="secondary" fullWidth>
            Visit Site
          </Button>
        </ProjectContentButton>
      </ProjectContentButtons>
    </ProjectContentWrapper>
  );
});
