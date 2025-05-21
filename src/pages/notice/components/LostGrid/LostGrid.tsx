import { useState } from "react";
import { Container, TagContainer, GridContainer } from "./LostGrid.styles";
import LostItem from "../LostItem/LostItem";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";
import type { LostItemType } from "../../data/lostItems";
import DeleteModal from "@/pages/admin/notice/components/DeleteModal/DeleteModal";

interface LostGridProps {
  isAdmin?: boolean;
  lostItems: LostItemType[];
}

const LostGrid = ({ isAdmin = false, lostItems }: LostGridProps) => {
  const [selectedTag, setSelectedTag] = useState<string>("전체");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [targetId, setTargetId] = useState<number | null>(null);
  const tagList = ["전체", "휴대폰", "지갑", "화장품"];
  const navigate = useNavigate();

  const handleDelete = () => {
    if (targetId === null) return;
    // 삭제 처리
    setIsModalOpen(false);
  };

  const handleEdit = (id: number) => {
    console.log("수정하기 이동");
    navigate(`/admin/edit/${id}?type=lost`);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <TagContainer>
        {tagList.map((tag, index) => (
          <Tag
            key={index}
            tagTitle={tag}
            isActive={selectedTag == tag}
            onSelectTag={setSelectedTag}
          />
        ))}
      </TagContainer>
      <GridContainer>
        {lostItems.map((lost, index) => (
          <LostItem
            key={index}
            imageUrl={lost.lost_item_image_urls[0]}
            onEdit={() => handleEdit(lost.lost_id)}
            onDelete={() => {
              setTargetId(lost.lost_id);
              setIsModalOpen(true);
            }}
            onClick={() =>
              navigate(
                `${isAdmin ? "/admin/notice/lost" : "/notice/lost"}/${lost.lost_id}`
              )
            }
            isAdmin={isAdmin}
          />
        ))}
      </GridContainer>
      {isModalOpen && (
        <DeleteModal onCancel={handleCancel} onDelete={handleDelete} />
      )}
    </Container>
  );
};

export default LostGrid;
