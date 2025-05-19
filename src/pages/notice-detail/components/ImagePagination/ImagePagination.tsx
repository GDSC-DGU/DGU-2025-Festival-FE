import { DotContainer, Dot } from "./ImagePagination.styles";

interface ImagePaginationProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

const ImagePagination = ({
  total,
  current,
  onDotClick,
}: ImagePaginationProps) => {
  return (
    <DotContainer>
      {Array.from({ length: total }).map((_, i) => (
        <Dot key={i} $active={i === current} onClick={() => onDotClick(i)} />
      ))}
    </DotContainer>
  );
};

export default ImagePagination;
