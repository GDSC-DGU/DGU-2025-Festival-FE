import { Container, NoticeContent, NoticeText } from "./Notice.styles";

interface NoticeItem {
  id: number;
  title: string;
}

interface NoticeProps {
  notices: NoticeItem[];
}

const Notice = ({ notices }: NoticeProps) => {
  return (
    <Container>
      {notices.slice(0, 3).map((notice, index) => (
        <NoticeContent key={notice.id} $rank={index}>
          <NoticeText>{notice.title}</NoticeText>
        </NoticeContent>
      ))}
    </Container>
  );
};

export default Notice;
