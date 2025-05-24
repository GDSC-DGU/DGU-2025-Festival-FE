import {
  Container,
  TitleText,
  DateText,
  ContentContainer,
  AdminContainer,
  DeleteButton,
  EditButton,
} from "./NoticeItem.styles";
import dayjs from "dayjs";

interface NoticeItemProps {
  title: string;
  date: Date;
  onClick: () => void;
  isAdmin?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const NoticeItem = ({
  title,
  date,
  onClick,
  isAdmin = false,
  onEdit,
  onDelete,
}: NoticeItemProps) => {
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.();
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.();
  };

  return (
    <Container onClick={onClick}>
      <ContentContainer>
        <TitleText>{title}</TitleText>
        <DateText>{dayjs(date).fromNow()}</DateText>
      </ContentContainer>
      {isAdmin && (
        <AdminContainer>
          <EditButton onClick={handleEditClick}>수정</EditButton>
          <DeleteButton onClick={handleDeleteClick}>삭제</DeleteButton>
        </AdminContainer>
      )}
    </Container>
  );
};

export default NoticeItem;
