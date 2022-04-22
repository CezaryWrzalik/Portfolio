import { useEffect, useState } from "react";

const useGetWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ x: 0, y: 0 });

  const getSize = () => {
    const y = window.innerHeight;
    const x = window.innerWidth;

    setWindowSize({ x, y });
  };

  useEffect(() => {
    window.addEventListener("resize", getSize);
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, []);

	return {windowSize};
};

export default useGetWindowSize;
