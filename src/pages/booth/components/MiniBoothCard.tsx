import styled from 'styled-components';

const Card = styled.div`
    flex: 0 0 auto;
    width: 160px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 12px;
    cursor: pointer;
    scroll-snap-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 8px;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const Intro = styled.div`
  font-size: 12px;
  color: var(--gray-500);
`;

interface Props {
  id: string;
  image: string;
  name: string;
  intro: string;
  onClick: () => void;
}

export default function MiniBoothCard({ id, image, name, intro, onClick }: Props) {
  return (
    <Card onClick={onClick} data-booth-id={id}>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
      <Intro>{intro}</Intro>
    </Card>
  );
}
