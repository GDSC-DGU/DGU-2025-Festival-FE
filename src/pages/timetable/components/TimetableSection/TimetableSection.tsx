import { Wrapper } from "./TimetableSection.styles";
import TimetableItem from "../TimetableItem/TimetableItem";
import { timetableData } from "../../data/timetableData";

interface TimetableSectionProps {
  selectedDate: string;
}

const TimetableSection = ({ selectedDate }: TimetableSectionProps) => {
  const filteredData = timetableData.filter(
    (item) => item.date === selectedDate
  );

  return (
    <Wrapper>
      {filteredData.map((item, index) => (
        <TimetableItem
          key={index}
          id={item.id}
          start={item.start}
          end={item.end}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </Wrapper>
  );
};

export default TimetableSection;
