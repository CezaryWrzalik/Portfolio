import { BackgroundModal } from "@atoms/BackgroundModal/BackgroundModal";
import useClickOutside from "@utils/hooks/useClickOutside";
import { useRef, useState } from "react";
import { ProjectImageContent } from "@content/ProjectContent/ProjectImageContent";
import { ProjectTextContent } from "@content/ProjectContent/ProjectTextContent";
import { ProjectLimiter, ProjectWrapper } from "./Project.styled";
import { ProjectDataType } from "@@types/CommonTypes";

export type ProjectProps = {
  projectData: ProjectDataType; 
}

export const Project = ({projectData}: ProjectProps) => {
  const [mobileContentVisible, setMobileContentVisible] = useState(false);
  const contentRef = useRef(null);
  const backgroundRef = useRef(null);

  const showMobileContent = () => {
    setMobileContentVisible(true);
  };

  const hideMobileContent = () => {
    setMobileContentVisible(false);
  };

  useClickOutside(contentRef, hideMobileContent, backgroundRef);

  return (
    <>
      <ProjectWrapper>
        <ProjectLimiter>
          <ProjectImageContent showMobileContent={showMobileContent} projectData={projectData}/>
          <ProjectTextContent
            mobileContentVisible={mobileContentVisible}
            ref={contentRef}
            projectData={projectData}
          />
        </ProjectLimiter>
      </ProjectWrapper>
      <BackgroundModal active={mobileContentVisible} ref={backgroundRef} />
    </>
  );
};
