import { ListContainer, EmptyText } from "./NoticeList.styles";
import NoticeItem from "../NoticeItem/NoticeItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { NoticeItemType } from "../../types/noticeItems";
import DeleteModal from "@/pages/admin/notice/components/DeleteModal/DeleteModal";
import { NoticeDeleteAPI } from "@/api/notice/notice";

interface NoticeListProps {
  isAdmin?: boolean;
  notices: NoticeItemType[];
  onDeleted?: () => void;
}

const NoticeList = ({
  isAdmin = false,
  notices,
  onDeleted,
}: NoticeListProps) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetId, setTargetId] = useState<number | null>(null);

  const handleDelete = async () => {
    if (targetId === null) return;
    const result = await NoticeDeleteAPI(targetId);
    if (result.success) {
      onDeleted?.(); // 부모 컴포넌트에 삭제 알림
    }
    setIsModalOpen(false);
  };

  const handleEdit = (id: number) => {
    navigate(`/admin/edit/${id}?type=notice`);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ListContainer>
      {notices.length === 0 ? (
        <EmptyText>공지사항이 없습니다.</EmptyText>
      ) : (
        notices.map((notice) => (
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
        ))
      )}
      {isModalOpen && (
        <DeleteModal onCancel={handleCancel} onDelete={handleDelete} />
      )}
    </ListContainer>
  );
};

export default NoticeList;
