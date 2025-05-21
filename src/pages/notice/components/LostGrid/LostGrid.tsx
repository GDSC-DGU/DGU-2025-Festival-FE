import { useState } from "react";
import { Container, TagContainer, GridContainer } from "./LostGrid.styles";
import LostItem from "../LostItem/LostItem";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";
import type { LostItemType } from "../../data/lostItems";

interface LostGridProps {
  isAdmin?: boolean;
  lostItems: LostItemType[];
}

const LostGrid = ({ isAdmin = false, lostItems }: LostGridProps) => {
  const [selectedTag, setSelectedTag] = useState<string>("전체");
  const tagList = ["전체", "휴대폰", "지갑", "화장품"];
  const navigate = useNavigate();

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
            imageUrl={lost.lost_item_image_url}
            onClick={() => navigate(`/notice/lost/${lost.lost_id}`)}
            isAdmin={isAdmin}
          />
        ))}
      </GridContainer>
    </Container>
  );
};

export default LostGrid;
