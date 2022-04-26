import { useRecoilState } from "recoil";
import { currElIndexAtom } from "src/recoil/atom/currElIndexAtom";
import { yValuesKeys } from "@@types/CommonTypes";
import { useEffect, useRef, useState } from "react";

export let yValues = {
  Home: {
    elementStart: 0,
    elementEnd: 0,
  },
  About: {
    elementStart: 0,
    elementEnd: 0,
  },
  Skills: {
    elementStart: 0,
    elementEnd: 0,
  },
  Projects: {
    elementStart: 0,
    elementEnd: 0,
  },
};

export const ObjectKeys = Object.keys(yValues);

const useScroll = () => {
  const [currElIndex, setCurrElIndex] = useRecoilState(currElIndexAtom);
  const elementOnScreen = Object.values(yValues)[currElIndex];
  const scrollFromTopRef = useRef(0);
  const isScrolling = useRef(false);
  const prevElement = currElIndex > 0 ? currElIndex - 1 : 0;
  const nextElement = currElIndex < 3 ? currElIndex + 1 : 0;

  const updateScrollPosition = () => {
    scrollFromTopRef.current = document.documentElement.scrollTop;
    const scrollY = scrollFromTopRef.current;

    if (scrollY === elementOnScreen.elementStart) {
      isScrolling.current = false;
    }
  };

  const handleScroll = (e: any) => {
    const preventScrolling = () => {
      e.preventDefault();
      e.stopPropagation();
    };

    updateScrollPosition();

    if (isScrolling.current) {
      preventScrolling();
      return;
    }

    const scrollY = scrollFromTopRef.current;
    const windowY = window.innerHeight;

    //CATCH SCROLL UP
    if (e.deltaY < 0 && scrollY <= elementOnScreen.elementStart) {
      isScrolling.current = true;
      preventScrolling();

      if (prevElement > -1) {
        scrollToElement(prevElement);
      }
    }

    //CATCH SCROLL DOWN
    if (e.deltaY > 0 && windowY + scrollY >= elementOnScreen.elementEnd) {
      isScrolling.current = true;
      preventScrolling();

      if (nextElement) {
        scrollToElement(nextElement);
      }
    }
  };

  const handleSwipe = (e: TouchEvent) => {
    const marginOfError = 100;
    let touchStart = 0;
    let touchEnd = 0;

    if (e.type === "touchstart") {
      touchStart = e.changedTouches[0].screenY;
    }

    const swipe = (e: TouchEvent) => {
      touchEnd = e.changedTouches[0].screenY;
      const touchMoveValue = touchStart - touchEnd;

      if (touchMoveValue > marginOfError && nextElement)
        scrollToElement(nextElement);
      else if (touchMoveValue < -marginOfError && prevElement)
        scrollToElement(prevElement);
    };

    document.addEventListener("touchend", swipe, { once: true });
  };

  const updateYOfElements = () => {
    Object.keys(yValues).map((key) => {
      const element = document.getElementById(`${key}`);
      const yMin = element?.getBoundingClientRect().top;
      const yMax = element?.getBoundingClientRect().bottom;
      const elementYMin = yMin! + document.documentElement.scrollTop;
      const elementYMax = yMax! + document.documentElement.scrollTop;
      yValues = {
        ...yValues,
        [key]: {
          elementStart: elementYMin,
          elementEnd: elementYMax,
        },
      };
      scrollToElement(currElIndex);
    });
  };

  const scrollToElement = (elementIndex: number) => {
    const choosedElement = Object.values(yValues)[elementIndex].elementStart;
    window.scrollTo({
      top: choosedElement,
      behavior: "smooth",
    });
    setCurrElIndex(elementIndex);
  };

  useEffect(() => {
    window.addEventListener("resize", updateYOfElements);
    window.addEventListener("mousedown", handleScroll, false);
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchmove", handleScroll, { passive: false });
    window.addEventListener("keydown", handleScroll, false);
    window.addEventListener("scroll", updateScrollPosition, false);
    window.addEventListener("touchstart", handleSwipe, { passive: false });

    return () => {
      window.removeEventListener("resize", updateYOfElements);
      window.removeEventListener("wheel", handleScroll, false);
      window.removeEventListener("mousedown", handleScroll, false);
      window.removeEventListener("touchmove", handleScroll, false);
      window.removeEventListener("scroll", updateScrollPosition, false);
      window.removeEventListener("keydown", handleScroll, false);
      window.removeEventListener("touchstart", handleSwipe);
    };
  }, [elementOnScreen, handleScroll]);

  useEffect(() => {
    updateYOfElements();
    scrollToElement(0);
    updateScrollPosition();
  }, []);

  return { scrollToElement };
};

export default useScroll;
