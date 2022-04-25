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
};

const useScroll = () => {
  const [elementOnScreen, setElementOnScreen] = useState<yValuesKeys>("Home");
  const isScrolling = useRef(false);
  const ObjectKeys = Object.keys(yValues);
  const currentElementIndex = ObjectKeys.indexOf(elementOnScreen);
  const previousElement = ObjectKeys[currentElementIndex - 1] as yValuesKeys;
  const nextElement = ObjectKeys[currentElementIndex + 1] as yValuesKeys;

  const updateScrollPosition = () => {
    let scrollFromTop = 0;
    scrollFromTop = document.documentElement.scrollTop;

    if (scrollFromTop === yValues[elementOnScreen].elementStart) {
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

    const y = window.innerHeight;
    const currentElement = yValues[elementOnScreen];

    // if (e.deltaY < 0 && y >= currentElement.elementStart) {
    //   isScrolling.current = true;
    //   preventScrolling();
    //   console.log(y);
    //   console.log(currentElement.elementStart);
    //   console.log(y >= currentElement.elementStart);

    //   if (previousElement) {
    //     scrollToElement(previousElement);
    //   }
    // }

    // console.log(y + document.documentElement.scrollTop);
    // console.log(currentElement.elementEnd);
    // console.log(y >= currentElement.elementEnd);
    // if (e.deltaY > 0 && y + document.documentElement.scrollTop >= currentElement.elementEnd ) {
    //   isScrolling.current = true;
    //   preventScrolling();

    //   if (nextElement) {
    //     scrollToElement(nextElement);
    //   }
    // }

    if (y >= currentElement.elementEnd || y <= currentElement.elementStart) {
      preventScrolling();

      if (e.deltaY > 0 && nextElement) {
        scrollToElement(nextElement);
      }

      if (e.deltaY < 0 && previousElement) {
        scrollToElement(previousElement);
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
      else if (touchMoveValue < -marginOfError && previousElement)
        scrollToElement(previousElement);
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
      scrollToElement(elementOnScreen);
    });
  };

  const scrollToElement = (element: yValuesKeys) => {
    const choosedElement = yValues[element].elementStart;
    window.scrollTo({
      top: choosedElement,
      behavior: "smooth",
    });
    setElementOnScreen(element);
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
    scrollToElement("Home");
    updateScrollPosition();
  }, []);

  return { scrollToElement, elementOnScreen, setElementOnScreen };
};

export default useScroll;
