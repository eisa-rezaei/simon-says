import { useEffect, useRef } from "react";
import { StSingleColor } from "./style";
import sound1 from "assets/1.wav";
import sound2 from "assets/2.wav";
import sound3 from "assets/3.wav";
import sound4 from "assets/4.wav";

const Color = ({ color, flash, onClick }) => {
  const musicRef = useRef(null);

  useEffect(() => {
    const musicObj = {
      "#ff115a": sound1,
      "#006aff": sound2,
      "#fbd72b": sound3,
      "#3bb78f": sound4,
    };
    if (flash) {
      musicRef.current.src = flash && musicObj[color];
    }
  }, [flash, color]);

  return (
    <>
      <audio autoPlay src="" ref={musicRef} />
      <StSingleColor color={flash ? `${color}80` : color} onClick={onClick} />
    </>
  );
};

export default Color;
