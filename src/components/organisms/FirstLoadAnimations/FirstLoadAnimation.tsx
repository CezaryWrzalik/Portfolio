import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { scrollAtom } from "@@recoil/atom/scrollAtom";
import { AnimationTypes, SectionIndexes } from "@@types/CommonTypes";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { RelativeWrapper } from "./FirstLoadAnimation.styled";

export type FirstLoadAnimationProps = {
  children?: JSX.Element | JSX.Element[] | string;
  delay: number;
  section: SectionIndexes;
  animation?: AnimationTypes;
  visibleAt?: SectionIndexes;
  last?: boolean;
};

export const FirstLoadAnimation = ({
  children,
  section,
  delay,
  animation,
  visibleAt,
  last,
}: FirstLoadAnimationProps) => {
  const setCanScroll = useSetRecoilState(scrollAtom);
  const currElIndex = useRecoilValue(currElIndexAtom);
  const [isVisible, setIsVisible] = useState(false);
  const [noAnimation, setNoAnimation] = useState(false);

  const preventScrollWhileAnimating = () => {
    const timer = (0.2 * delay + 0.4) * 1000;
    setCanScroll(false);
    setTimeout(() => {
      setCanScroll(true);
    }, timer);
  };

  useEffect(() => {
    if (currElIndex === section && !isVisible && last) {
      preventScrollWhileAnimating();
    }
    if (currElIndex >= section) {
      setIsVisible(true);
    }
    if(visibleAt === currElIndex){
      setNoAnimation(true);
    }
  }, [currElIndex]);
  
  return (
    <RelativeWrapper isVisible={isVisible} delay={delay} animation={animation} noAnimation={noAnimation}>
      {children}
    </RelativeWrapper>
  );
};
