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
  LineNowButton,
  InContent,
  DIRVANA,
} from "./BoothCard.styles";
import { useNavigate } from "react-router-dom";
import { useLikeBoothMutation } from "@/api/likes/useLikeBoothMutation";
import { useRef } from "react";

interface BoothCardProps {
  boothId: string;
  name: string;
  intro: string;
  image: string;
  isLinenow?: boolean;
  linenowLink?: string;
  isManage?: boolean;
}

export default function BoothCard({
  boothId,
  name,
  intro,
  image,
  isLinenow = false,
  linenowLink,
  isManage = false,
}: BoothCardProps) {
  const isInitiallyLiked = useBoothStore((state) => state.isLiked(boothId));
  const setSelectedBoothId = useBoothStore((state) => state.setSelectedBoothId);
  const toggleLikeState = useBoothStore((state) => state.toggleLike);
  const hasLikedBefore = useRef(false);
  const navigate = useNavigate();
  const { mutate } = useLikeBoothMutation();

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLikeState(boothId);

    if (!hasLikedBefore.current) {
      mutate(Number(boothId.replace(/[^0-9]/g, "")));
      hasLikedBefore.current = true;
    }
  };

  const handleClick = () => {
    if (isLinenow) {
      window.open(linenowLink, "_blank");
      // navigate(`${linenowLink}`);
    } else {
      setSelectedBoothId(boothId);
      navigate(`/booth/${boothId}`);
    }
  };

  return (
    <Card onClick={handleClick}>
      <Image src={image} alt="부스 이미지" />
      <Info>
        <InContent>
          <TitleContainer>
            <BoothName>{name}</BoothName>

            <LikeButton onClick={handleLikeClick}>
              <img
                src={isInitiallyLiked ? HeartOn : HeartOff}
                alt={isInitiallyLiked ? "찜 해제" : "찜하기"}
                width={24}
                height={24}
              />
            </LikeButton>
          </TitleContainer>
          <Intro>{intro}</Intro>
        </InContent>

        {/* ✅ isLinenow가 true일 경우 버튼 렌더링 */}
        {isLinenow && <LineNowButton>라인나우 예약가능</LineNowButton>}
        {isManage && <DIRVANA>부스 예약가능</DIRVANA>}
      </Info>
    </Card>
  );
}
