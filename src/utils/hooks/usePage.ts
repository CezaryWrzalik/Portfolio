import { useEffect } from "react";

const usePage = () => {
  useEffect(() => {
    const preventScroll = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
    };
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", preventScroll, { passive: false });
    };

  }, []);
};

export default usePage;
