import { Container, NoticeContent, NoticeText } from "./Notice.styles";
import type { NoticeItem } from "@/types/notice";

interface NoticeProps {
  notices: NoticeItem[];
}

const Notice = ({ notices }: NoticeProps) => {
  return (
    <Container>
      {notices.slice(0, 3).map((notice, index) => (
        <NoticeContent key={notice.notice_id} $rank={index}>
          <NoticeText>{notice.notice_title}</NoticeText>
        </NoticeContent>
      ))}
    </Container>
  );
};

export default Notice;
