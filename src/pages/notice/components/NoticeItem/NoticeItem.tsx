import { Container, TitleText, DateText } from "./NoticeItem.styles";
import { formatDate } from "@/utils/date";

interface NoticeItemProps {
  title: string;
  date: Date;
  onClick: () => void;
}

const NoticeItem = ({ title, date, onClick }: NoticeItemProps) => {
  return (
    <Container onClick={onClick}>
      <TitleText>{title}</TitleText>
      <DateText>{formatDate(date)}</DateText>
    </Container>
  );
};

export default NoticeItem;
