import {
  Container,
  PerformerImage,
  PerformerInfo,
  Performer,
  Description,
  TimeDescription,
} from "./TimeLine.styles";
import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";

interface TimeLineProps {
  currentPerformer: {
    name: string;
    description: string;
    imageUrl: string;
    startTime: string;
    endTime: string;
  };
}

const TimeLine = ({ currentPerformer }: TimeLineProps) => {
  const { ref, isVisible } = useOnScreenAnimation<HTMLDivElement>();
  return (
    <Container ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
      <PerformerImage src={currentPerformer.imageUrl} alt="profile" />
      <PerformerInfo>
        <Performer>{currentPerformer.name}</Performer>
        <Description>{currentPerformer.description}</Description>
      </PerformerInfo>
      <TimeDescription>
        {currentPerformer.startTime} ~ {currentPerformer.endTime}
      </TimeDescription>
    </Container>
  );
};

export default TimeLine;
