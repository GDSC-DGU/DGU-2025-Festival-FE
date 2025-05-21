import { ListContainer } from "./NoticeList.styles";
import NoticeItem from "../NoticeItem/NoticeItem";
import { useNavigate } from "react-router-dom";

const NoticeList = () => {
  const now = new Date();
  const navigate = useNavigate();

  interface Notice {
    id: number;
    title: string;
    date: Date;
  }

  const notices: Notice[] = [
    { id: 1, title: "어플 이용 시 주의사항", date: now },
    { id: 2, title: "축제 일정 변경 안내", date: now },
    { id: 3, title: "긴급 점검 공지", date: now },
  ];

  return (
    <ListContainer>
      {notices.map((notice) => (
        <NoticeItem
          key={notice.id}
          onClick={() => navigate(`/notice/${notice.id}`)}
          title={notice.title}
          date={notice.date}
        />
      ))}
    </ListContainer>
  );
};

export default NoticeList;
