import {
  ItemContainer,
  TimeText,
  LineContainer,
  Circle,
  VerticalLine,
  Card,
  Avatar,
  Title,
  Button,
  Description,
  Content,
} from "./TimetableItem.styles";
import { useState } from "react";
import DetailModal from "../DetailModal/DetailModal";
import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";
import DefaultImage from "@/assets/images/timelineImage.png";
interface TimetableItemProps {
  id: number;
  start: string;
  end: string;
  title: string;
  description?: string;
  imageUrl: string;
}

const TimetableItem = ({
  id,
  start,
  end,
  title,
  description,
  imageUrl,
}: TimetableItemProps) => {
  const { ref, isVisible } = useOnScreenAnimation<HTMLDivElement>(0.5);

  const [showModal, setShowModal] = useState<boolean>(false);
  const handleDetail = () => {
    setShowModal(true);
  };

  const image = imageUrl == "" ? DefaultImage : imageUrl;

  return (
    <ItemContainer
      ref={ref}
      className={`fade-up ${isVisible ? "visible" : ""}`}
    >
      <TimeText>
        {start}
        <br />~{end}
      </TimeText>
      <LineContainer>
        <Circle />
        <VerticalLine />
      </LineContainer>
      <Card>
        <Avatar src={image} alt="image" />
        <Content>
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
        </Content>

        <Button onClick={handleDetail}>상세보기</Button>
      </Card>
      {showModal && <DetailModal id={id} onClose={() => setShowModal(false)} />}
    </ItemContainer>
  );
};

export default TimetableItem;
