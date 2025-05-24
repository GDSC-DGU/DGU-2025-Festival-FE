import {
  Overlay,
  ModalWrapper,
  TopBar,
  Tag,
  CloseButton,
  Avatar,
  Title,
  Description,
  InstaID,
  SongCard,
  SongContent,
  SongRank,
  SongTitle,
  SongList,
  ClubContent,
} from "./DetailModal.styles";
import { useEffect } from "react";
import ModalPortal from "@/components/common/ModalPortal";
import { timetableData } from "../../data/timetableData";
import CloseIcon from "@/assets/icons/close.svg";
import DefaultImage from "@/assets/images/timelineImage.png";

interface DetailModalProps {
  id: number;
  onClose: () => void;
}

const DetailModal = ({ id, onClose }: DetailModalProps) => {
  const data = timetableData.find((item) => item.id === id);

  if (!data) return null;

  const SongsData = () => {
    if (!data.songs || data.songs.length === 0) {
      return <div>노래 미공개</div>;
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

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // 모달 닫힐 때 복원
    };
  }, []);
  return (
    <ModalPortal>
      <Overlay onClick={onClose}>
        <ModalWrapper onClick={(e) => e.stopPropagation()}>
          <TopBar>
            <Tag>{data.tag}</Tag>
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
            <InstaID>@{data.instagram}</InstaID>
          </ClubContent>
          <SongList>
            <SongsData />
          </SongList>
        </ModalWrapper>
      </Overlay>
    </ModalPortal>
  );
};

export default DetailModal;
