import styled from "styled-components";

const Card = styled.div`
  flex: 0 0 auto;
  width: 160px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 4px;
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

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: keep-all;
  width: 100%;
`;

const Linenow = styled.div`
  padding: 4px 6px;
  background: #2f6cf6;
  ${({ theme }) => theme.fonts.Caption}
  bottom: 0;
  color: white;
  border-radius: 4px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  width: 100%;
`;

interface Props {
  id: string;
  image: string;
  name: string;
  intro: string;
  onClick: () => void;
  isLinenow?: boolean;
}

export default function MiniBoothCard({
  id,
  image,
  name,
  intro,
  onClick,
  isLinenow = false,
}: Props) {
  return (
    <Card onClick={onClick} data-booth-id={id}>
      <Content>
        <Image src={image} alt={name} />
        <Name>{name}</Name>
        <Intro>{intro}</Intro>
      </Content>

      {isLinenow && <Linenow>라인나우</Linenow>}
    </Card>
  );
}
