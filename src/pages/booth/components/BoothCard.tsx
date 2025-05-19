import { useBoothStore } from '../stores/useBoothStore';
import HeartOn from '@/assets/icons/heart-on.png';
import HeartOff from '@/assets/icons/heart-off.png';
import { Card, Info, BoothName, Intro, LikeButton } from './BoothCard.styles';
import { useNavigate } from 'react-router-dom';

interface BoothCardProps {
  boothId: string;
  name: string;
  intro: string;
  // image: string;
}

export default function BoothCard({ boothId, name, intro }: BoothCardProps) {
  const toggleLike = useBoothStore((state) => state.toggleLike);
  const isLiked = useBoothStore((state) => state.isLiked(boothId));
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/booth/${boothId}`)}>
      <LikeButton onClick={(e) => {
        e.stopPropagation();
        toggleLike(boothId);
      }}>
        <img
          src={isLiked ? HeartOn : HeartOff}
          alt={isLiked ? '찜 해제' : '찜하기'}
          width={24}
          height={24}
        />
      </LikeButton>
      <Info>
        <BoothName>{name}</BoothName>
        <Intro>{intro}</Intro>
      </Info>
    </Card>
  );
}
