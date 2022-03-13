import { useState, useEffect, useRef } from "react";

export default function useComponentVisible() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const ref = useRef(null);
  console.log(
    "🚀 ~ file: useComponentVisible.jsx ~ line 5 ~ useComponentVisible ~ isComponentVisible",
    isComponentVisible
  );

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(!isComponentVisible);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, !isComponentVisible);

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside,
        !isComponentVisible
      );
    };
  });

  return [ref, isComponentVisible, setIsComponentVisible];
}
