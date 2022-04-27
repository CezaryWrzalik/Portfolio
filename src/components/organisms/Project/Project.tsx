import { BackgroundModal } from "@atoms/BackgroundModal/BackgroundModal";
import { Button } from "@atoms/Button/Button";
import { Typography } from "@atoms/Typography/Typography";
import { ImageTictactoe, ImageTictactoeMobile } from "@shared/images";
import useClickOutside from "@utils/hooks/useClickOutside";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ProjectContentButton,
  ProjectContentButtons,
  ProjectContentDescription,
  ProjectContentStage,
  ProjectContentTechnologies,
  ProjectContentTitle,
  ProjectContentWrapper,
  ProjectContentYear,
  ProjectHeaderMobile,
  ProjectImageWrapper,
  ProjectImageWrapperMobile,
  ProjectLimiter,
  ProjectWrapper,
} from "./Project.styled";

export const Project = () => {
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
        <ProjectHeaderMobile>
          <Typography.TextH3_20>Tic-tac-toe</Typography.TextH3_20>
        </ProjectHeaderMobile>
        <ProjectLimiter>
          <ProjectImageWrapper>
            <Image src={ImageTictactoe} layout="fill" objectFit="contain" />
          </ProjectImageWrapper>
          <ProjectImageWrapperMobile onClick={showMobileContent}>
            <Image
              src={ImageTictactoeMobile}
              layout="fill"
              objectFit="contain"
            />
          </ProjectImageWrapperMobile>
          <ProjectContentWrapper
            mobileContentVisible={mobileContentVisible}
            ref={contentRef}
          >
            <ProjectContentTitle>
              <Typography.TextH3_20>Tic-tac-toe</Typography.TextH3_20>
              <ProjectContentYear>2021</ProjectContentYear>
            </ProjectContentTitle>
            <ProjectContentDescription>
              Game application which alows u to play against your friend or Ai
            </ProjectContentDescription>
            <ProjectContentTechnologies>
              <Typography.TextBullet_16 marks>Next.js</Typography.TextBullet_16>
              <Typography.TextBullet_16 marks>
                Next Auth
              </Typography.TextBullet_16>
              <Typography.TextBullet_16 marks>Recoil</Typography.TextBullet_16>
              <Typography.TextBullet_16 marks>
                Styled-Compponents
              </Typography.TextBullet_16>
            </ProjectContentTechnologies>
            <ProjectContentStage>
              <Typography.TextBody_16>
                Application Stage:
              </Typography.TextBody_16>
              <Typography.TextBody_16>Finished</Typography.TextBody_16>
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
        </ProjectLimiter>
      </ProjectWrapper>
      <BackgroundModal active={mobileContentVisible} ref={backgroundRef} />
    </>
  );
};
