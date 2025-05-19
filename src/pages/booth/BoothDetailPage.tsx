import { useParams } from 'react-router-dom';
import { booths } from '@/pages/booth/data/booths';
import { useBoothStore } from '@/pages/booth/stores/useBoothStore';
import HeartOn from '@/assets/icons/heart-on.png';
import HeartOff from '@/assets/icons/heart-off.png';
import MapContainer from '@/pages/booth/components/MapContainer';
import BoothDetailTitle from '@/pages/booth/components/BoothDetailTitle';

import {
  Container, MapWrapper, Card, Header, Info,
  BoothName, BoothIntro, Like, LikeCount,
  BoothImage, ReserveButton
} from './BoothDetailPage.styles';

export default function BoothDetailPage() {
  const { id } = useParams();
  const booth = booths.find((b) => b.id === id);
    const toggleLike = useBoothStore((state) => state.toggleLike);
    const isLiked = useBoothStore((state) => state.isLiked(id || ''));
    const likeCount = useBoothStore((state) => state.getLikeCount(id || ''));

 

  if (!booth) return <div>부스를 찾을 수 없습니다.</div>;

  return (
      <Container>
        <BoothDetailTitle />
      <MapWrapper>
      <MapContainer
  date={booth.date}
  boothType={booth.type as 'day' | 'night'}
  boothId={booth.id} 
/>
      </MapWrapper>
      <Card>
        <Header>
          <Info>
            <BoothName>{booth.name}</BoothName>
            <BoothIntro>{booth.intro}</BoothIntro>
          </Info>
          <Like onClick={() => toggleLike(booth.id)}>
  <img src={isLiked ? HeartOn : HeartOff} alt="찜" width={24} />
  <LikeCount>{likeCount}</LikeCount>
</Like>

        </Header>
        <BoothImage src={booth.image} alt="부스 이미지" />
        {booth.waitingAvailable && (
          <ReserveButton>웨이팅 하기</ReserveButton>
        )}
      </Card>
    </Container>
  );
}
