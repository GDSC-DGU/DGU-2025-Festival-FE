import { useState } from "react";
import {
  Container,
  TagScrollWrapper,
  TagList,
  GridContainer,
  EmptyText,
} from "./LostGrid.styles";
import LostItem from "../LostItem/LostItem";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";
import type { LostItemType } from "../../types/lostItems";
import DeleteModal from "@/pages/admin/notice/components/DeleteModal/DeleteModal";
import { LostTag } from "@/types/enums";
import { getEnumValueByKey } from "@/utils/enumUtils";
import { LostDeleteAPI } from "@/api/notice/lost";

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

  const handleDelete = async () => {
    if (targetId === null) return;
    try {
      const response = await LostDeleteAPI(targetId);
      if (!response.success) {
        alert("삭제에 실패했습니다. 서버 관리자에게 문의하세요.");
      }
    } catch {
      alert("삭제 도중 문제가 발생했습니다. 서버 관리자에게 문의하세요.");
    } finally {
      setIsModalOpen(false);
      setTargetId(null);
    }
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
        <EmptyText>등록된 분실물이 없어요</EmptyText>
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
