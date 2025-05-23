import { NoticeContent, NoticeText } from "./Notice.styles";
import type { NoticeItem } from "@/types/notice";
import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";
import { useNavigate } from "react-router-dom";

interface NoticeCardProps {
  notice: NoticeItem;
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
    </NoticeContent>
  );
};

export default NoticeCard;
