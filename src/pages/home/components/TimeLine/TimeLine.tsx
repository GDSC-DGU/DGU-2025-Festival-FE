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
  const { ref, isVisible } = useOnScreenAnimation<HTMLDivElement>();

  return (
    <Container ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
      {currentPerformer ? (
        <>
          <PerformerImage
            src={
              currentPerformer.imageUrl == ""
                ? DefaultImage
                : currentPerformer.imageUrl
            }
            alt="profile"
          />
          <PerformerInfo>
            <Performer>{currentPerformer.title}</Performer>
            <Description>{currentPerformer.description}</Description>
          </PerformerInfo>
          <TimeDescription>
            {currentPerformer.start} ~ {currentPerformer.end}
          </TimeDescription>
        </>
      ) : (
        <EmptyContainer>현재 진행중인 공연이 없어요!</EmptyContainer>
      )}
    </Container>
  );
};

export default TimeLine;
