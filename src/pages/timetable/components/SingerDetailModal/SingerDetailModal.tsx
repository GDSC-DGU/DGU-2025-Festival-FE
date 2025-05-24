import {
  Overlay,
  ModalWrapper,
  TopBar,
  Tag,
  CloseButton,
  Avatar,
  Title,
  ClubContent,
  Section,
  HashtagWrapper,
  Hashtag,
  Ment,
  HashTagContainer,
  DayTag,
  AvatarWrapper,
} from "./SingerDetailModal.styles";
import { useEffect } from "react";
import ModalPortal from "@/components/common/ModalPortal";
import CloseIcon from "@/assets/icons/close.svg";
import DefaultImage from "@/assets/images/timelineImage.png";
import InstagramSvgButton from "../InstagramLinkButton/InstagramSvgButton";
import { singerData } from "../../data/singerData";

interface DetailModalProps {
  id: number;
  onClose: () => void;
}

const SingerDetailModal = ({ id, onClose }: DetailModalProps) => {
  const singer = singerData.find((item) => item.id === id);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // 모달 닫힐 때 복원
    };
  }, []);

  if (!singer) return null;

  // 날짜 → Day 변환 함수
  const getDayTag = (date: string) => {
    if (date === "2025-05-28") return "Day 2";
    if (date === "2025-05-29") return "Day 3";
  };

  return (
    <ModalPortal>
      <Overlay onClick={onClose}>
        <ModalWrapper onClick={(e) => e.stopPropagation()}>
          <Section>
            <TopBar>
              <Tag>연예인 공연 정보</Tag>
              <CloseButton onClick={onClose}>
                <img src={CloseIcon} alt="닫기" width={18} height={18} />
              </CloseButton>
            </TopBar>
            <AvatarWrapper>
              <DayTag>{getDayTag(singer.date)}</DayTag>
              <Avatar src={singer.imageUrl || DefaultImage} alt={singer.name} />
            </AvatarWrapper>
            <ClubContent>
              <Title>{singer.name}</Title>
              {singer.instagram != "" && (
                <InstagramSvgButton instagramId={singer.instagram} />
              )}
            </ClubContent>
            {singer.hashtags && singer.hashtags.length > 0 && (
              <HashTagContainer>
                <Ment>이 가수 하면 떠오르는 노래는?</Ment>
                <HashtagWrapper>
                  {singer.hashtags.map((tag, index) => (
                    <Hashtag key={index}>{tag}</Hashtag>
                  ))}
                </HashtagWrapper>
              </HashTagContainer>
            )}
          </Section>
        </ModalWrapper>
      </Overlay>
    </ModalPortal>
  );
};

export default SingerDetailModal;
