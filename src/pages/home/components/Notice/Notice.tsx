import { Container } from "./Notice.styles";
import type { NoticeItem } from "@/types/notice";
import NoticeCard from "./NoticeCard";

interface NoticeProps {
  notices: NoticeItem[];
}

const Notice = ({ notices }: NoticeProps) => {
  return (
    <Container>
      {notices.slice(0, 3).map((notice) => (
        <NoticeCard notice={notice} />
      ))}
    </Container>
  );
};

export default Notice;
