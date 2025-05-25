import {
  Container,
  PerformerImage,
  PerformerInfo,
  Performer,
  Description,
  TimeDescription,
  EmptyContainer,
} from "./TimeLine.styles";
import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";
import type { PerformanceItemType } from "@/pages/timetable/types/performanceItem";
import DefaultImage from "@/assets/images/timelineImage.png";

interface TimeLineProps {
  currentPerformer: PerformanceItemType | null;
}

const TimeLine = ({ currentPerformer }: TimeLineProps) => {
  const { ref: performerRef, isVisible: performerVisible } =
    useOnScreenAnimation<HTMLDivElement>();
  const { ref: emptyRef, isVisible: emptyVisible } =
    useOnScreenAnimation<HTMLDivElement>();

  return currentPerformer ? (
    <Container
      ref={performerRef}
      className={`fade-up ${performerVisible ? "visible" : ""}`}
    >
      <PerformerImage
        src={currentPerformer.imageUrl || DefaultImage}
        alt="profile"
      />
      <PerformerInfo>
        <Performer>{currentPerformer.title}</Performer>
        <Description>{currentPerformer.description}</Description>
      </PerformerInfo>
      <TimeDescription>
        {currentPerformer.start} ~ {currentPerformer.end}
      </TimeDescription>
    </Container>
  ) : (
    <EmptyContainer
      ref={emptyRef}
      className={`fade-up ${emptyVisible ? "visible" : ""}`}
    >
      현재 진행중인 공연이 없어요!
    </EmptyContainer>
  );
};

export default TimeLine;
