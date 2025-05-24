import {
  Container,
  SliderWrapper,
  Slide,
  EmptyContainer,
} from "./Lineup.styles";
import { useEffect, useState, useMemo, forwardRef } from "react";
import Artist7 from "@/assets/lineup/다듀.webp";
import Artist2 from "@/assets/lineup/빈지노.webp";
import Artist3 from "@/assets/lineup/엔시티드림.webp";
import Artist6 from "@/assets/lineup/씨엔블루.webp";
import Artist8 from "@/assets/lineup/윤하.webp";
import Artist1 from "@/assets/lineup/카더가든.webp";
import Artist4 from "@/assets/lineup/크러쉬.webp";
import Artist5 from "@/assets/lineup/키오라.webp";

interface LineupProps {
  selectedDate: string;
  className?: string;
}

const Lineup = forwardRef<HTMLDivElement, LineupProps>(
  ({ selectedDate, className }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = useMemo(() => {
      switch (selectedDate) {
        case "2025-05-28": // 둘째날
          return [Artist1, Artist2, Artist3, Artist4];
        case "2025-05-29": // 셋째날
          return [Artist5, Artist6, Artist7, Artist8];
        default:
          return []; // 첫째날 등 나머지는 없음
      }
    }, [selectedDate]);

    useEffect(() => {
      setCurrentIndex(0); // 날짜 바뀔 때 초기화
    }, [selectedDate]);

    useEffect(() => {
      if (images.length === 0) return;

      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [images]);

    if (images.length === 0)
      return (
        <EmptyContainer ref={ref} className={className}>
          오늘은 라인업이 없습니다.
        </EmptyContainer>
      );
    return (
      <Container ref={ref} className={className}>
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
  }
);

export default Lineup;
