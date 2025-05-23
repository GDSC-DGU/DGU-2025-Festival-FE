import { ListContainer } from "./NoticeList.styles";
import NoticeItem from "../NoticeItem/NoticeItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { NoticeItemType } from "../../types/noticeItems";
import DeleteModal from "@/pages/admin/notice/components/DeleteModal/DeleteModal";

interface NoticeListProps {
  isAdmin?: boolean;
  notices: NoticeItemType[];
}

const NoticeList = ({ isAdmin = false, notices }: NoticeListProps) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetId, setTargetId] = useState<number | null>(null);

  const handleDelete = () => {
    if (targetId === null) return;
    // 삭제 처리
    setIsModalOpen(false);
  };

  const handleEdit = (id: number) => {
    console.log("수정하기 이동");
    navigate(`/admin/edit/${id}?type=notice`);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ListContainer>
      {notices.map((notice) => (
        <NoticeItem
          key={notice.notice_id}
          onClick={() =>
            navigate(
              `${isAdmin ? "/admin/notice" : "/notice"}/${notice.notice_id}`
            )
          }
          title={notice.notice_title}
          date={notice.publish_time}
          isAdmin={isAdmin}
          onEdit={() => handleEdit(notice.notice_id)}
          onDelete={() => {
            setTargetId(notice.notice_id);
            setIsModalOpen(true);
          }}
        />
      ))}
      {isModalOpen && (
        <DeleteModal onCancel={handleCancel} onDelete={handleDelete} />
      )}
    </ListContainer>
  );
};

export default NoticeList;
