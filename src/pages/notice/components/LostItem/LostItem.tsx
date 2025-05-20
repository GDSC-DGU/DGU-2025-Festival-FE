import { Container, Image } from "./LostItem.styles";

interface LostItemProps {
  onClick: () => void;
  imageUrl: string;
}

const LostItem = ({ imageUrl, onClick }: LostItemProps) => {
  return (
    <Container onClick={onClick}>
      <Image src={imageUrl} alt="분실물 사진" />
    </Container>
  );
};

export default LostItem;
