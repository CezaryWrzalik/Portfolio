import { useRecoilState } from "recoil";
import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { useEffect, useRef } from "react";

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
  Contact: {
    elementStart: 0,
    elementEnd: 0,
  },
};

export const ObjectKeys = Object.keys(yValues);

const useScroll = () => {
  const [currElIndex, setCurrElIndex] = useRecoilState(currElIndexAtom);
  const yValuesRef = useRef(yValues);
  const isScrolling = useRef(false);
  const scrollDirection = useRef("down");
  const scrollErrorRef = useRef(0);
  const touchStartRef = useRef(0);
  const elementOnScreen = Object.values(yValuesRef.current)[currElIndex];
  const prevElement = currElIndex >= 0 ? currElIndex : false;
  const nextElement = currElIndex < 4 ? currElIndex + 1 : false;

  const handleCheckPosition = () => {
    const scrollTop = window.scrollY;
    const scrollBottom = window.scrollY + window.innerHeight;

    if (scrollDirection.current !== "up") {
      if (elementOnScreen.elementStart === scrollTop) {
        isScrolling.current = false;
      }
    }

    if (scrollDirection.current === "up") {
      if (elementOnScreen.elementEnd === scrollBottom) {
        isScrolling.current = false;
      }
    }
  };

  const handleScroll = (e: any) => {
    const scrollBottom = window.scrollY + window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollError = scrollErrorRef.current;

    if (isScrolling.current) {
      handleCheckPosition();
      e.preventDefault();
      return;
    }

    // Preventing from overscolling
    // Temporary solution till i get beteter solution
    if (
      scrollDirection.current === "down" &&
      elementOnScreen.elementEnd <= scrollBottom
    ) {
      e.preventDefault();
      preventScroll(currElIndex, true);
    }

    if (
      scrollDirection.current === "up" &&
      elementOnScreen.elementStart >= scrollTop
    ) {
      e.preventDefault();
      preventScroll(currElIndex);
    }

    if (e.deltaY < 0) {
      scrollDirection.current = "up";
      if (elementOnScreen.elementStart >= scrollTop) {
        updateScrollError("up");
        e.preventDefault();
        if (scrollError < -500 && prevElement) {
          scrollToElement(prevElement - 1, true);
        }
      }
    }

    if (e.deltaY > 0) {
      scrollDirection.current = "down";
      if (elementOnScreen.elementEnd <= scrollBottom) {
        updateScrollError("down");
        e.preventDefault();
        if (scrollError > 500 && nextElement) {
          scrollToElement(nextElement);
        }
      }
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].screenY;
  };

  const handleSwipe = (e: TouchEvent) => {
    const scrollError = scrollErrorRef.current;
    const scrollBottom = window.scrollY + window.innerHeight;
    const scrollTop = window.scrollY;
    const touchStartY = touchStartRef.current;
    const touchCurrentY = e.changedTouches[0].screenY;
    const direction = touchStartY < touchCurrentY ? "up" : "down";

    if (direction === "down") {
      scrollDirection.current = "down";
      if (elementOnScreen.elementEnd <= scrollBottom) {
        e.preventDefault();
        updateScrollError("down");
        if (scrollError > 2500 && nextElement) {
          scrollToElement(nextElement);
        }
      }
    }

    if (direction === "up") {
      scrollDirection.current = "up";
      if (elementOnScreen.elementStart >= scrollTop) {
        e.preventDefault();
        updateScrollError("up");
        if (scrollError < -2500 && prevElement) {
          scrollToElement(prevElement - 1, true);
        }
      }
    }
  };

  const updateScrollError = (direction: string) => {
    if (direction === "reset") {
      scrollErrorRef.current = 0;
    }

    if (direction === "up") {
      if (scrollErrorRef.current > 0) {
        updateScrollError("reset");
      }
      scrollErrorRef.current -= 100;
    }

    if (direction === "down") {
      if (scrollErrorRef.current < 0) {
        updateScrollError("reset");
      }
      scrollErrorRef.current += 100;
    }
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
          elementStart: Math.round(elementYMin),
          elementEnd: Math.round(elementYMax),
        },
      };
      yValuesRef.current = yValues;
    });
  };

  const preventScroll = (elementIndex: number, bottom?: boolean) => {
    const top = Object.values(yValues)[elementIndex].elementStart;
    const bot =
      Object.values(yValues)[elementIndex].elementEnd - window.innerHeight;
    window.scrollTo({
      top: bottom ? bot : top,
    });
  };

  const scrollToElement = (elementIndex: number, bottom?: boolean) => {
    const choosedElementTop = Object.values(yValues)[elementIndex].elementStart;
    const choosedElementBot =
      Object.values(yValues)[elementIndex].elementEnd - window.innerHeight;

    isScrolling.current = true;
    window.scrollTo({
      top: bottom ? choosedElementBot : choosedElementTop,
      behavior: "smooth",
    });
    updateScrollError("reset");
    setCurrElIndex(elementIndex);
  };

  useEffect(() => {
    updateYOfElements();
    window.addEventListener("resize", updateYOfElements, { passive: false });
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleSwipe, { passive: false });
    return () => {
      window.removeEventListener("resize", updateYOfElements);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleSwipe);
    };
  }, [currElIndex]);

  useEffect(() => {
    scrollToElement(0);
  }, []);

  return { scrollToElement };
};

export default useScroll;
