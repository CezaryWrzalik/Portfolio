import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import { ImageProjects } from "@shared/images";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currElIndexAtom } from "src/recoil/atom/currElIndexAtom";
import { TextWrapper } from "../AboutSkills/RightSection/AboutRightSection.styled";
import { ContentWrapper, FirstEntryImageWrapper, ProjectsWrapper } from "./Projects.styled";

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
        <AnimatedImage image={ImageProjects} visible={currElIndex > 2} side={animate ? "Mid" : "Top"} halfScreen={true}/>
      </FirstEntryImageWrapper>
			<ContentWrapper>

			</ContentWrapper>
    </ProjectsWrapper>
  );
};
