import {
  Container,
  PerformerImage,
  PerformerInfo,
  Performer,
  Description,
  TimeDescription,
} from "./TimeLine.styles";

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
  return (
    <Container>
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
