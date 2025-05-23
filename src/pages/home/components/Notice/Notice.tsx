import { Container } from "./Notice.styles";
import type { NoticeItemType } from "@/pages/notice/types/noticeItems";
import NoticeCard from "./NoticeCard";

interface NoticeProps {
  notices: NoticeItemType[];
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
