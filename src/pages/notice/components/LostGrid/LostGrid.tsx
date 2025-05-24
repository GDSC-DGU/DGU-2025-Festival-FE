import { useState } from "react";
import {
  Container,
  TagScrollWrapper,
  TagList,
  GridContainer,
  NullContainer,
} from "./LostGrid.styles";
import LostItem from "../LostItem/LostItem";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";
import type { LostItemType } from "../../types/lostItems";
import DeleteModal from "@/pages/admin/notice/components/DeleteModal/DeleteModal";
import { LostTag } from "@/types/enums";
import { getEnumValueByKey } from "@/utils/enumUtils";

interface LostGridProps {
  isAdmin?: boolean;
  lostItems: LostItemType[];
}

const LostGrid = ({ isAdmin = false, lostItems }: LostGridProps) => {
  const [selectedTag, setSelectedTag] = useState<string>("전체");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [targetId, setTargetId] = useState<number | null>(null);
  const tagList = ["전체", ...Object.values(LostTag)];
  const navigate = useNavigate();

  const filteredItems =
    selectedTag === "전체"
      ? lostItems
      : lostItems.filter((item) => {
          const displayName = getEnumValueByKey(LostTag, item.lost_tag_name);
          return displayName === selectedTag;
        });

  const handleDelete = () => {
    if (targetId === null) return;
    // 삭제 처리
    setIsModalOpen(false);
  };

  const handleEdit = (id: number) => {
    navigate(`/admin/edit/${id}?type=lost`);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <TagScrollWrapper>
        <TagList>
          {tagList.map((tag, index) => (
            <Tag
              key={index}
              tagTitle={tag}
              isActive={selectedTag === tag}
              onSelectTag={setSelectedTag}
            />
          ))}
        </TagList>
      </TagScrollWrapper>
      {filteredItems.length === 0 ? (
        <NullContainer>등록된 분실물이 없습니다.</NullContainer>
      ) : (
        <GridContainer>
          {filteredItems.map((lost, index) => (
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
      )}

      {isModalOpen && (
        <DeleteModal onCancel={handleCancel} onDelete={handleDelete} />
      )}
    </Container>
  );
};

export default LostGrid;
