import {
  Overlay,
  ModalWrapper,
  TopBar,
  Tag,
  CloseButton,
  Avatar,
  Title,
  Description,
  SongCard,
  SongContent,
  SongRank,
  SongTitle,
  SongList,
  ClubContent,
  NullContainer,
  Section,
} from "./DetailModal.styles";
import { useEffect } from "react";
import ModalPortal from "@/components/common/ModalPortal";
import { timetableData } from "../../data/timetableData";
import CloseIcon from "@/assets/icons/close.svg";
import DefaultImage from "@/assets/images/timelineImage.png";
import InstagramLinkButton from "../InstagramLinkButton/InstagramLinkButton";

interface DetailModalProps {
  id: number;
  onClose: () => void;
}

const DetailModal = ({ id, onClose }: DetailModalProps) => {
  const data = timetableData.find((item) => item.id === id);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // 모달 닫힐 때 복원
    };
  }, []);

  if (!data) return null;

  const SongsData = () => {
    if (!data.songs || data.songs.length === 0) {
      return <NullContainer>노래가 공개되지 않았어요!</NullContainer>;
    } else {
      return (
        <>
          {data.songs.map((song, index) => (
            <SongCard key={index}>
              <SongRank>{index + 1}</SongRank>
              <SongContent>
                <SongTitle>{song.title}</SongTitle>
              </SongContent>
            </SongCard>
          ))}
        </>
      );
    }
  };
  return (
    <ModalPortal>
      <Overlay onClick={onClose}>
        <ModalWrapper onClick={(e) => e.stopPropagation()}>
          <Section>
            <TopBar>
              <Tag>동아리 공연 정보</Tag>
              <CloseButton onClick={onClose}>
                <img src={CloseIcon} alt="닫기" width={18} height={18} />
              </CloseButton>
            </TopBar>

            <Avatar
              src={data.imageUrl == "" ? DefaultImage : data.imageUrl}
              alt="image"
            />
            <ClubContent>
              <Title>{data.title}</Title>
              <Description>{data.description}</Description>
              {data.instagram != "" && (
                <InstagramLinkButton instagramId={data.instagram} />
              )}
            </ClubContent>
          </Section>
          <Section>
            <SongList>
              <SongsData />
            </SongList>
          </Section>
        </ModalWrapper>
      </Overlay>
    </ModalPortal>
  );
};

export default DetailModal;
