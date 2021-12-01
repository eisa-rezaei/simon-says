import Color from "components/Color";
import { delay } from "components/utils/delay";
import { useEffect, useState } from "react";
import loseSound from "assets/8.wav";
import { StColorsContainer, StColorsStartBtn, StHomeContainer } from "./style";

const COLORS = ["#3bb78f", "#ff115a", "#fbd72b", "#006aff"];
const initialStates = {
  isOn: false,
  colors: [],
  score: 0,
  userState: false,
  userColors: [],
  failed: false,
};

const Home = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [flashColor, setFlashColor] = useState("");
  const [init, setInit] = useState(initialStates);

  useEffect(() => {
    if (isPlay) {
      setInit((prev) => {
        return { ...prev, isOn: true };
      });
    }
  }, [isPlay]);

  useEffect(() => {
    if (isPlay && init.isOn) {
      let color = COLORS[Math.floor(Math.random() * 4)];
      setInit((prev) => {
        return {
          ...prev,
          colors: [...prev.colors, color],
          score: prev.colors.length,
        };
      });
    }
  }, [isPlay, init.isOn]);

  useEffect(() => {
    if (isPlay && init.isOn && init.colors.length) {
      const flashCardHandler = async () => {
        let len = init.colors.length;
        await delay(500);
        for (let i = 0; i < len; i++) {
          await delay(500);
          setFlashColor(init.colors[i]);
          await delay(300);
          setFlashColor("");
          if (i === len - 1) {
            const colors = [...init.colors];
            setInit({
              ...init,
              isOn: false,
              score: colors.length,
              userState: true,
              userColors: colors.reverse(),
            });
          }
        }
      };
      flashCardHandler();
    }
  }, [isPlay, init]);

  //click handler
  const clickHandler = async (color) => {
    if (!init.isOn && init.userState) {
      const newColors = [...init.userColors];
      const lastColor = newColors.pop();
      setFlashColor(color);
      if (lastColor === color) {
        if (newColors.length > 0) {
          setInit({ ...init, userColors: newColors, score: newColors.length });
        } else {
          await delay(300);
          setInit({
            ...init,
            isOn: true,
            userState: false,
            score: init.colors.length,
          });
        }
      } else {
        await delay(200);
        setInit({ ...initialStates, score: init.colors.length, failed: true });
        setIsPlay(false);
      }
    }
    await delay(200);
    setFlashColor("");
  };

  return (
    <StHomeContainer paragraphFade={init.failed && !isPlay}>
      <h1>Colors Game</h1>
      <p> You lose !!</p>
      <audio src={init.failed && !isPlay && loseSound} autoPlay />
      <StColorsContainer>
        {COLORS.map((color) => (
          <Color
            key={color}
            color={color}
            flash={flashColor === color}
            onClick={() => clickHandler(color)}
          />
        ))}
        <StColorsStartBtn onClick={() => setIsPlay(true)}>
          {init.isOn || isPlay ? init.score : "Start"}
        </StColorsStartBtn>
      </StColorsContainer>
    </StHomeContainer>
  );
};

export default Home;
