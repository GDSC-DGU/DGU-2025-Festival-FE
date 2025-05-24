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
import { useLikeBoothMutation } from "@/api/likes/useLikeBoothMutation";

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
  const isLiked = useBoothStore((state) => state.isLiked(boothId));
  const setSelectedBoothId = useBoothStore((state) => state.setSelectedBoothId);
  const navigate = useNavigate();
  const { mutate } = useLikeBoothMutation();

  return (
    <Card
      onClick={() => {
        setSelectedBoothId(boothId);
        navigate(`/booth/${boothId}`);
      }}
    >
      <Image src={image} alt="부스 이미지" />
      <Info>
        <TitleContainer>
          <BoothName>{name}</BoothName>
          <LikeButton
            disabled={isLiked}
            onClick={(e) => {
              e.stopPropagation();
              if (!isLiked) {
                mutate(Number(boothId.replace(/[^0-9]/g, "")));
              }
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
