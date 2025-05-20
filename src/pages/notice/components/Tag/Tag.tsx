import { TagContainer, TagText } from "./Tag.styles";

interface TagProps {
  isActive: boolean;
  tagTitle: string;
  onSelectTag: (s: string) => void;
}

const Tag = ({ isActive, tagTitle, onSelectTag }: TagProps) => {
  return (
    <TagContainer onClick={() => onSelectTag(tagTitle)} $isActive={isActive}>
      <TagText $isActive={isActive}>{tagTitle}</TagText>
    </TagContainer>
  );
};

export default Tag;
