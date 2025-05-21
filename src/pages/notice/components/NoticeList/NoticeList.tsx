import { ListContainer } from "./NoticeList.styles";
import NoticeItem from "../NoticeItem/NoticeItem";
import { useNavigate } from "react-router-dom";
import type { NoticeItemType } from "../../data/noticeItems";

interface NoticeListProps {
  isAdmin?: boolean;
  notices: NoticeItemType[];
}

const NoticeList = ({ isAdmin = false, notices }: NoticeListProps) => {
  const navigate = useNavigate();

  return (
    <ListContainer>
      {notices.map((notice) => (
        <NoticeItem
          key={notice.notice_id}
          onClick={() => navigate(`/notice/${notice.notice_id}`)}
          title={notice.notice_title}
          date={notice.publish_time}
          isAdmin={isAdmin}
        />
      ))}
    </ListContainer>
  );
};

export default NoticeList;
