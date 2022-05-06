import { useRecoilState } from "recoil";
import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { useEffect, useRef } from "react";
import { scrollAtom } from "@@recoil/atom/scrollAtom";

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
  const [canScroll, setCanScroll] = useRecoilState(scrollAtom);
  const yValuesRef = useRef(yValues);
  const isScrollingRef = useRef(false);
  const canScrollRef = useRef(false);
  const scrollDirection = useRef("down");
  const scrollErrorRef = useRef(0);
  const touchStartRef = useRef(0);
  const prevElement = currElIndex >= 0 ? currElIndex : false;
  const nextElement = currElIndex < 4 ? currElIndex + 1 : false;

  const handleCheckPosition = () => {
    const scrollTop = window.scrollY;
    const scrollBottom = window.scrollY + window.innerHeight;
    const elementOnScreen = Object.values(yValuesRef.current)[currElIndex];
    const elementStart = elementOnScreen.elementStart;
    const elementEnd = elementOnScreen.elementEnd;
    
    if (scrollDirection.current !== "up") {
      if (elementStart === scrollTop) {
        isScrollingRef.current = false;
      }
    }
    
    if (scrollDirection.current === "up") {
      if (elementEnd === scrollBottom) {
        isScrollingRef.current = false;
      }
    }
  };
  
  const handleScroll = (e: any) => {
    const scrollBottom = window.scrollY + window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollError = scrollErrorRef.current;
    const elementOnScreen = Object.values(yValuesRef.current)[currElIndex];
    const elementStart = elementOnScreen.elementStart;
    const elementEnd = elementOnScreen.elementEnd;
    
    updateYOfElements();

    // console.log(isScrollingRef.current, !canScrollRef.current, canScroll)

    if (isScrollingRef.current || !canScrollRef.current) {
      handleCheckPosition();
      e.preventDefault();
      return;
    }

    // Preventing from overscolling
    // Temporary solution till i get beteter solution
    if (
      scrollDirection.current === "down" &&
      elementEnd <= scrollBottom
    ) {
      e.preventDefault();
      preventScroll(true);
    }

    if (
      scrollDirection.current === "up" &&
      elementStart >= scrollTop
    ) {
      e.preventDefault();
      preventScroll();
    }

    if (e.deltaY < 0 && canScrollRef.current) {
      scrollDirection.current = "up";
      if (elementStart >= scrollTop) {
        updateScrollError("up");
        e.preventDefault();
        if (scrollError < -500 && prevElement) {
          setCurrElIndex(prevElement - 1);
        }
      }
    }

    if (e.deltaY > 0 && canScrollRef.current) {
      scrollDirection.current = "down";
      if (elementEnd <= scrollBottom) {
        updateScrollError("down");
        e.preventDefault();
        if (scrollError > 500 && nextElement) {
          setCurrElIndex(nextElement);
        }
      }
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].screenY;
  };

  const handleSwipe = (e: TouchEvent) => {
    const elementOnScreen = Object.values(yValuesRef.current)[currElIndex];
    const elementStart = elementOnScreen.elementStart;
    const elementEnd = elementOnScreen.elementEnd;
    const scrollError = scrollErrorRef.current;
    const scrollBottom = window.scrollY + window.innerHeight;
    const scrollTop = window.scrollY;
    const touchStartY = touchStartRef.current;
    const touchCurrentY = e.changedTouches[0].screenY;
    const direction = touchStartY < touchCurrentY ? "up" : "down";

    if (direction === "down") {
      scrollDirection.current = "down";
      if (elementEnd <= scrollBottom) {
        e.preventDefault();
        updateScrollError("down");
        if (scrollError > 500 && nextElement) {
          setCurrElIndex(nextElement);
        }
      }
    }

    if (direction === "up") {
      scrollDirection.current = "up";
      if (elementStart >= scrollTop) {
        e.preventDefault();
        updateScrollError("up");
        if (scrollError < -500 && prevElement) {
          setCurrElIndex(prevElement - 1);
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

  const preventScroll = (bottom?: boolean) => {
    const elementOnScreen = Object.values(yValuesRef.current)[currElIndex];
    const elementStart = elementOnScreen.elementStart;
    const elementEnd = elementOnScreen.elementEnd;
    const top = elementStart;
    const bot = elementEnd - window.innerHeight;

    window.scrollTo({
      top: bottom ? bot : top,
    });
  };

  const scrollToElement = () => {
    const elementOnScreen = Object.values(yValuesRef.current)[currElIndex];
    const elementStart = elementOnScreen.elementStart;
    const elementEnd = elementOnScreen.elementEnd;
    const top = elementStart;
    const bot = elementEnd - window.innerHeight;
    const bottom = scrollDirection.current === "up";
    isScrollingRef.current = true;
    console.log(currElIndex);
    window.scrollTo({
      top: bottom ? bot : top,
      behavior: "smooth",
    });

    updateScrollError("reset");
    setCurrElIndex(currElIndex);
  };

  const delayScroll = () => {
    setTimeout(() => {
      canScrollRef.current = true;
      setCanScroll(true);
    }, 2500);
  };

  useEffect(() => {
    updateYOfElements();
    scrollToElement();
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
    canScrollRef.current = canScroll;
  }, [canScroll]);
  
  useEffect(() => {
    delayScroll();
  }, []);

  return {};
};

export default useScroll;
