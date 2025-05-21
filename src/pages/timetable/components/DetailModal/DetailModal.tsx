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
  SongCoverer,
  SongList,
  ClubContent,
} from "./DetailModal.styles";
import ModalPortal from "@/components/common/ModalPortal";
import { timetableData } from "../../data/timetableData";
import CloseIcon from "@/assets/icons/close.svg";

interface DetailModalProps {
  id: number;
  onClose: () => void;
}

const DetailModal = ({ id, onClose }: DetailModalProps) => {
  const data = timetableData.find((item) => item.id === id);

  if (!data) return null;

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
          <Avatar src={data.imageUrl} alt="image" />
          <ClubContent>
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
            <InstaID>@{data.instagram}</InstaID>
          </ClubContent>

          <SongList>
            {data.songs.map((song, index) => (
              <SongCard key={index}>
                <SongRank>{index + 1}</SongRank>
                <SongContent>
                  <SongTitle>{song.title}</SongTitle>
                  <SongCoverer>{song.coveredBy}</SongCoverer>
                </SongContent>
              </SongCard>
            ))}
          </SongList>
        </ModalWrapper>
      </Overlay>
    </ModalPortal>
  );
};

export default DetailModal;
