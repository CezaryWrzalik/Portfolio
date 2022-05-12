import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import { ImageProjects } from "@shared/images";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { SingleProject } from "@organisms/SingleProject/SingleProject";
import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { projectsData } from "@content/ProjectContent/projectsData";
import {
  ContentWrapper,
  FirstEntryImageWrapper,
  ProjectsList,
  ProjectsWrapper,
} from "./Projects.styled";
import { SectionHeader } from "@molecules/SectionHeader/SectionHeader";
import { sections } from "@shared/constants";

export const Projects = () => {
  const currElIndex = useRecoilValue(currElIndexAtom);
  const [animate, setAnimate] = useState(false);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (currElIndex >= sections.projects && !animate) {
      setAnimate(true);
      setTimeout(() => {
        setCanScroll(true);
      }, 2000);
    }
  }, [currElIndex]);

  return (
    <ProjectsWrapper
      id="Projects"
      currElIndex={currElIndex}
      canScroll={canScroll}
    >
      <FirstEntryImageWrapper animate={animate}>
        <AnimatedImage
          image={ImageProjects}
          visible={currElIndex >= sections.projects}
          side={animate ? "Mid" : "Top"}
          halfScreen={true}
          projects
        />
      </FirstEntryImageWrapper>
      <ContentWrapper animate={animate}>
        <SectionHeader>Portfolio</SectionHeader>
        <ProjectsList>
          {projectsData.map((projectData, i) => (
            <SingleProject key={i} projectData={projectData} index={i} />
          ))}
        </ProjectsList>
      </ContentWrapper>
    </ProjectsWrapper>
  );
};
