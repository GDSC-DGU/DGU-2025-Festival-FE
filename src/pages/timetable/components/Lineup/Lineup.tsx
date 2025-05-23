import { Container, SliderWrapper, Slide } from "./Lineup.styles";
import { useEffect, useState } from "react";
import Artist1 from "@/assets/lineup/다듀.png";
import Artist2 from "@/assets/lineup/빈지노.png";
import Artist3 from "@/assets/lineup/씨엔블루.png";
import Artist4 from "@/assets/lineup/윤하.png";
// import Artist5 from "@/assets/lineup/카더가든.png";
// import Artist6 from "@/assets/lineup/크러쉬.png";
// import Artist7 from "@/assets/lineup/키오라.png";

const images = [Artist1, Artist2, Artist3, Artist4];

const Lineup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3초마다 전환

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <SliderWrapper>
        {images.map((img, index) => {
          const position = index - currentIndex;
          const isActive = position === 0;
          const isLeft =
            position === -1 ||
            (currentIndex === 0 && index === images.length - 1);
          const isRight =
            position === 1 ||
            (currentIndex === images.length - 1 && index === 0);

          return (
            <Slide
              key={index}
              $active={isActive}
              $side={isLeft ? "left" : isRight ? "right" : undefined}
              src={img}
              alt={`artist-${index}`}
            />
          );
        })}
      </SliderWrapper>
    </Container>
  );
};

export default Lineup;
