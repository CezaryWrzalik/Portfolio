import { Typography } from "@atoms/Typography/Typography";
import {
  ProjectHeaderMobile,
  ProjectImageContentWrapper,
  ProjectImageWrapper,
} from "./ProjectContent.styled";
import Image from "next/image";
import { SingleProjectProps } from "@organisms/SingleProject/SingleProject";
import { ProjectDataType } from "@@types/CommonTypes";

interface ProjectImageContentProps {
  showMobileContent: () => void;
  projectData: ProjectDataType;
}

export const ProjectImageContent = ({
  showMobileContent,
  projectData,
}: ProjectImageContentProps) => {
  return (
    <ProjectImageContentWrapper>
      <ProjectHeaderMobile>
        <Typography.TextH3_20>{projectData.title}</Typography.TextH3_20>
      </ProjectHeaderMobile>
      <ProjectImageWrapper>
        <Image
          src={projectData.images.dekstop}
          layout="fill"
          objectFit="contain"
        />
      </ProjectImageWrapper>
      <ProjectImageWrapper mobile onClick={showMobileContent}>
        <Image
          src={projectData.images.mobile}
          layout="fill"
          objectFit="contain"
        />
      </ProjectImageWrapper>
    </ProjectImageContentWrapper>
  );
};
