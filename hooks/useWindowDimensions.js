import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: deviceWidth, innerHeight: deviceHeight } = window;
  return {
    deviceWidth,
    deviceHeight
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
