import { useBoothStore } from "../stores/useBoothStore";
import HeartOn from "@/assets/icons/heart-on.png";
import HeartOff from "@/assets/icons/heart-off.png";
import {
  Card,
  Info,
  BoothName,
  Intro,
  LikeButton,
  Image,
  TitleContainer,
} from "./BoothCard.styles";
import { useNavigate } from "react-router-dom";

interface BoothCardProps {
  boothId: string;
  name: string;
  intro: string;
  image: string;
}

export default function BoothCard({
  boothId,
  name,
  intro,
  image,
}: BoothCardProps) {
  const toggleLike = useBoothStore((state) => state.toggleLike);
  const isLiked = useBoothStore((state) => state.isLiked(boothId));
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/booth/${boothId}`)}>
      <Image src={image} alt="부스 이미지" />

      <Info>
        <TitleContainer>
          <BoothName>{name}</BoothName>
          <LikeButton
            onClick={(e) => {
              e.stopPropagation();
              toggleLike(boothId);
            }}
          >
            <img
              src={isLiked ? HeartOn : HeartOff}
              alt={isLiked ? "찜 해제" : "찜하기"}
              width={24}
              height={24}
            />
          </LikeButton>
        </TitleContainer>
        <Intro>{intro}</Intro>
      </Info>
    </Card>
  );
}
