import {
  Container,
  SliderWrapper,
  Slide,
  EmptyContainer,
} from "./Lineup.styles";
import { useEffect, useState, useMemo, forwardRef } from "react";

import SingerDetailModal from "../SingerDetailModal/SingerDetailModal";
import { singerData } from "../../data/singerData";

interface LineupProps {
  selectedDate: string;
  className?: string;
}

const Lineup = forwardRef<HTMLDivElement, LineupProps>(
  ({ selectedDate, className }, ref) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const artistsForDate = useMemo(() => {
      return singerData.filter((artist) => artist.date === selectedDate);
    }, [selectedDate]);

    const handleDetail = (id: number) => {
      setSelectedId(id);
      setShowModal(true);
    };

    useEffect(() => {
      setCurrentIndex(0); // 날짜 바뀔 때 초기화
    }, [selectedDate]);

    useEffect(() => {
      if (artistsForDate.length === 0) return;

      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % artistsForDate.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [artistsForDate]);

    if (artistsForDate.length === 0)
      return (
        <EmptyContainer ref={ref} className={className}>
          오늘은 라인업이 없습니다.
        </EmptyContainer>
      );
    return (
      <Container ref={ref} className={className}>
        {showModal && selectedId !== null && (
          <SingerDetailModal
            id={selectedId}
            onClose={() => setShowModal(false)}
          />
        )}
        <SliderWrapper>
          {artistsForDate.map((img, index) => {
            const position = index - currentIndex;
            const isActive = position === 0;
            const isLeft =
              position === -1 ||
              (currentIndex === 0 && index === artistsForDate.length - 1);
            const isRight =
              position === 1 ||
              (currentIndex === artistsForDate.length - 1 && index === 0);

            return (
              <Slide
                key={index}
                $active={isActive}
                $side={isLeft ? "left" : isRight ? "right" : undefined}
                src={img.imageUrl}
                alt={`artist-${index}`}
                onClick={() => handleDetail(img.id)}
              />
            );
          })}
        </SliderWrapper>
      </Container>
    );
  }
);

export default Lineup;
