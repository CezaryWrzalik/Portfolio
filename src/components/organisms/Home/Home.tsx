import { Button } from "@atoms/Button/Button";
import { Typography } from "@atoms/Typography/Typography";
import { HomeWrapper, InfoWrapper, WelcomeTextWrapper } from "./Home.styled";

export const Home = () => {
  return (
    <HomeWrapper>
      <WelcomeTextWrapper>
        <Typography.TextH1_64>
          Hi!<Typography.TextDyanmicColor>,</Typography.TextDyanmicColor> Hello{" "}
          <br /> I'm
          <Typography.TextDyanmicColor> Cezary </Typography.TextDyanmicColor>
          Wrzalik
        </Typography.TextH1_64>
        <Typography.TextH3_20>
          <Typography.TextDyanmicColor>
            FRONT-END DEVELOPER
          </Typography.TextDyanmicColor>
        </Typography.TextH3_20>
        <InfoWrapper>
          <Typography.TextBody_16>
            I’m a junior Front-end developer based in Wrocław
          </Typography.TextBody_16>
					<Button fullWidth={false}>Contact me!</Button>
        </InfoWrapper>
      </WelcomeTextWrapper>
    </HomeWrapper>
  );
};
