import { Container, Image, IconContainer, Icon } from "./LostItem.styles";
import EditIcon from "@/assets/icons/edit.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import DefaultImage from "@/assets/images/boothImage.png";

interface LostItemProps {
  onClick: () => void;
  imageUrl: string;
  isAdmin?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const LostItem = ({
  imageUrl,
  onClick,
  isAdmin = false,
  onEdit,
  onDelete,
}: LostItemProps) => {
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.();
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.();
  };

  const image = imageUrl ? imageUrl : DefaultImage;
  return (
    <Container onClick={onClick}>
      <Image src={image} alt="분실물 사진" />
      {isAdmin && (
        <IconContainer>
          <Icon>
            <img src={EditIcon} width={20} onClick={handleEditClick} />
          </Icon>
          <Icon>
            <img src={TrashIcon} width={20} onClick={handleDeleteClick} />
          </Icon>
        </IconContainer>
      )}
    </Container>
  );
};

export default LostItem;
