
import booth_1_1 from '@/assets/booth/donggam/KakaoTalk_20250524_180638808.jpg';
import booth_1_2 from '@/assets/booth/donggam/KakaoTalk_20250524_180638808_01.jpg';
import booth_1_3 from '@/assets/booth/donggam/KakaoTalk_20250524_180638808_02.jpg';
import booth_1_4 from '@/assets/booth/donggam/KakaoTalk_20250524_180740993.jpg';
import booth_1_5 from '@/assets/booth/donggam/KakaoTalk_20250524_180740993_01.png';
import booth_1_6 from '@/assets/booth/donggam/KakaoTalk_20250524_180740993_02.png';
import booth_1_7 from '@/assets/booth/donggam/KakaoTalk_20250524_180740993_03.png';
import booth_2_1 from '@/assets/booth/108/[빽투더백팔] 최종 포스터.jpg';
import booth_2_2 from '@/assets/booth/108/005.jpg';
import booth_2_3 from '@/assets/booth/108/006.jpg';
import booth_3_1 from '@/assets/booth/chinese/KakaoTalk_20250522_155923571_01.jpg';
import booth_3_2 from '@/assets/booth/chinese/KakaoTalk_20250522_155923571_02.jpg';
import booth_4_1 from '@/assets/booth/history/KakaoTalk_20250522_194504003.png';
import booth_4_2 from '@/assets/booth/history/KakaoTalk_20250522_194504003_01.png';
import booth_4_3 from '@/assets/booth/history/KakaoTalk_20250522_194504003_02.png'; 
import booth_5_1 from '@/assets/booth/buddhism/image.png';
import booth_5_2 from '@/assets/booth/buddhism/image (1).png';



export const booths = [
  {
    id: '1',
    name: '동감 사파리 월드',
    intro: ' 속보입니다! 동감랜드 사파리에서 아코 24마리가 탈출했습니다. 포획에 동참하시겠습니까?',
    date: '2025-05-28',
    type: 'night',
    position: { lat: 37.557685, lng: 127.000223 },
    images: [booth_1_1, booth_1_2, booth_1_3, booth_1_4, booth_1_5, booth_1_6, booth_1_7],
    waitingAvailable: true,
  },
  {
    id: '2',
    name: ' 빽투-더 백팔',
    intro: '108리더스 19기 레트로 야간주점',
    date: '2025-05-27',
    type: 'night',
    position: { lat: 37.557735, lng: 127.000246},
    images: [booth_2_1, booth_2_2, booth_2_3],
    waitingAvailable: false,
  },
  {
    id: '3',
    name: '辛서유기',
    intro: '중어중문학과',
    date: '2025-05-27',
    type: 'night',
    position: { lat: 37.557821, lng: 126.999844 },
    images: [booth_3_1, booth_3_2],
    waitingAvailable: false,
  },
  {
    id: '4',
    name: '분노의 삼국시대',
    intro: '“천하삼분(天下三分), 술로 통일하라!”',
    date: '2025-05-27',
    type: 'night',
    position: { lat: 37.5583, lng: 126.9975 },
    images: [booth_4_1, booth_4_2, booth_4_3],
    waitingAvailable: false,
  },
  {
    id: '5',
    name: '속세 한 잔',
    intro: '불교학부',
    date: '2025-05-27',
    type: 'night',
    position: { lat: 37.5586, lng: 126.9967 },
    images: [booth_5_1, booth_5_2],
    waitingAvailable: false,
  }
] as const;
