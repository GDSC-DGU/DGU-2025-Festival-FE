import {
  Container,
  TitleText,
  DateText,
  ContentContainer,
  AdminContainer,
  DeleteButton,
  EditButton,
} from "./NoticeItem.styles";
import { formatDate } from "@/utils/date";

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
  return (
    <Container onClick={onClick}>
      <ContentContainer>
        <TitleText>{title}</TitleText>
        <DateText>{formatDate(date)}</DateText>
      </ContentContainer>
      {isAdmin && (
        <AdminContainer>
          <EditButton onClick={onEdit}>수정</EditButton>
          <DeleteButton onClick={onDelete}>삭제</DeleteButton>
        </AdminContainer>
      )}
    </Container>
  );
};

export default NoticeItem;
