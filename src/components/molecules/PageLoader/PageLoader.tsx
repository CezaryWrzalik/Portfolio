import { scrollAtom } from "@@recoil/atom/scrollAtom";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { PageLoaderWrapper, Slider, SliderWrapper } from "./PageLoader.styled";

type PageLoaderProps = {
  isVisible: boolean;
};

export const PageLoader = ({ isVisible }: PageLoaderProps) => {
  const setCanScroll = useSetRecoilState(scrollAtom);

  useEffect(() => {
    setCanScroll(false);
    setTimeout(() => {
      setCanScroll(true);
    }, 2500);
  }, []);
  return (
    <PageLoaderWrapper isVisible={isVisible}>
      {[...Array(3)].map((x, i) => (
        <SliderWrapper key={i}>
          <Slider isVisible={isVisible} index={i} delay={i} />
        </SliderWrapper>
      ))}
    </PageLoaderWrapper>
  );
};
