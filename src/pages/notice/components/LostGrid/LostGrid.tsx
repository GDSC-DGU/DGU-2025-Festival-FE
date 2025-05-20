import { useState } from "react";
import { Container, TagContainer, GridContainer } from "./LostGrid.styles";
import LostItem from "../LostItem/LostItem";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";

const LostGrid = () => {
  const [selectedTag, setSelectedTag] = useState<string>("전체");
  const tagList = ["전체", "휴대폰", "지갑", "화장품"];
  const navigate = useNavigate();
  const lostItems = [
    {
      id: 1,
      imageUrl:
        "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20230830/20230830033031521.jpg",
    },
    {
      id: 2,
      imageUrl:
        "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20240104/20240104091146627.jpeg",
    },
    {
      id: 3,
      imageUrl:
        "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220228/20220228031042881.jpg",
    },
  ];

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
            imageUrl={lost.imageUrl}
            onClick={() => navigate(`/notice/lost/${lost.id}`)}
          />
        ))}
      </GridContainer>
    </Container>
  );
};

export default LostGrid;
