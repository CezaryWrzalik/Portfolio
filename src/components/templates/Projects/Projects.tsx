import { Typography } from "@atoms/Typography/Typography";
import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import { ImageProjects } from "@shared/images";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
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

export const Projects = () => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (currElIndex === 3 && !animate) {
      setAnimate(true);
    }
  }, [currElIndex]);

  return (
    <ProjectsWrapper id="Projects">
      <FirstEntryImageWrapper animate={animate}>
        <AnimatedImage
          image={ImageProjects}
          visible={currElIndex > 2}
          side={animate ? "Mid" : "Top"}
          halfScreen={true}
        />
      </FirstEntryImageWrapper>
      <ContentWrapper animate={animate}>
        <SectionHeader>Portfolio</SectionHeader>
        <ProjectsList>
          {projectsData.map((projectData, i) => (
            <SingleProject key={i} projectData={projectData} />
          ))}
        </ProjectsList>
      </ContentWrapper>
    </ProjectsWrapper>
  );
};
