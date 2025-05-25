import { NoticeContent, NoticeText, DateText } from "./Notice.styles";
import type { NoticeItemType } from "@/pages/notice/types/noticeItems";
import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";
import { useNavigate } from "react-router-dom";
import { formatDate } from "@/utils/date";

interface NoticeCardProps {
  notice: NoticeItemType;
}

const NoticeCard = ({ notice }: NoticeCardProps) => {
  const { ref, isVisible } = useOnScreenAnimation<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <NoticeContent
      key={notice.notice_id}
      ref={ref}
      className={`fade-up ${isVisible ? "visible" : ""}`}
      onClick={() => navigate(`/notice/${notice.notice_id}`)}
    >
      <NoticeText>{notice.notice_title}</NoticeText>
      <DateText>{formatDate(notice.publish_time)}</DateText>
    </NoticeContent>
  );
};

export default NoticeCard;
