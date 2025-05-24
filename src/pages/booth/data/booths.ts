
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
import booth_6_1 from '@/assets/booth/law/law1.png';
import booth_6_2 from '@/assets/booth/law/law2.webp';
import booth_6_3 from '@/assets/booth/law/law3.webp';
import booth_7_1 from '@/assets/booth/medicine/medicine1.png';
import booth_7_2 from '@/assets/booth/medicine/medicine2.png';
import booth_7_3 from '@/assets/booth/medicine/medicine3.png';
import booth_8_1 from '@/assets/booth/police/police1.png';
import booth_8_2 from '@/assets/booth/police/police2.png';
import booth_8_3 from '@/assets/booth/police/police3.png';
import booth_9_1 from '@/assets/booth/ad/ad1.png';
import booth_9_2 from '@/assets/booth/ad/ad2.png';
import booth_9_3 from '@/assets/booth/ad/ad3.png';
import booth_10_1 from '@/assets/booth/economics/image.jpg';
import booth_10_2 from '@/assets/booth/economics/image (1).jpg';
import booth_10_3 from '@/assets/booth/economics/image (2).jpg';
import booth_10_4 from '@/assets/booth/economics/image (3).jpg';
import booth_10_5 from '@/assets/booth/economics/image (4).jpg';
import booth_11_1 from '@/assets/booth/north/image (11).png';
import booth_11_2 from '@/assets/booth/north/image (12).png';
import booth_11_3 from '@/assets/booth/north/image (13).png';
import booth_12_1 from '@/assets/booth/accounting/스크린샷 2025-05-25 032652.png';
import booth_12_2 from '@/assets/booth/accounting/스크린샷 2025-05-25 033318.png';
import booth_13_1 from '@/assets/booth/robot/image (2).png';
import booth_13_2 from '@/assets/booth/robot/스크린샷 2025-05-25 033908.png';
import booth_14_1 from '@/assets/booth/electronic/image (3).png';
import booth_14_2 from '@/assets/booth/electronic/image (4).png';
import booth_14_3 from '@/assets/booth/electronic/image (5).png';

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
  },
  {
    id: '6',
    name: 'LAWTTE CINEMA',
    intro: '법과대학 영화관 컨셉 야간 부스',
    date: '2025-05-27',
    type: 'night',
    position: { lat: 37.558301, lng: 127.000702 },
    images: [booth_6_1, booth_6_2, booth_6_3],
    waitingAvailable: false,
  },
  {
    id: '7',
    name: '동약사랑산악회 약수터',
    intro: '약학대학',
    date: '2025-05-27',
    type: 'night',
    position: { lat: 37.558536, lng: 127.000521 },
    images: [booth_7_2, booth_7_1, booth_7_3],
    waitingAvailable: false,
  },
  {
    id: '8',
    name: '경찰사범대학',
    intro: '올해 대동제에서는 낮과 밤이 모두 수사 작전으로 물듭니다.',
    date: '2025-05-27',
    type: 'night',
    position: { lat: 37.557557, lng: 127.002006 },
    images: [booth_8_1, booth_8_2, booth_8_3],
    waitingAvailable: false,
  },
  {
    id: '9',
    name: '광고홍보학과',
    intro: '광홍돼학교 야간캠퍼스 개강!',
    date: '2025-05-27',
    type: 'night',
    position: { lat: 37.557107, lng: 127.002220 },
    images: [booth_9_1, booth_9_2, booth_9_3],
    waitingAvailable: false,
  },
  {
    id: '10',
    name: '경제학과',
    intro: '[흑자요리사: 주식(酒食) 계급 전쟁], 오직 돈으로 승부하라!',
    date: '2025-05-27',
    type: 'night',
    position: { lat: 37.557204, lng: 127.002442 },
    images: [booth_10_1, booth_10_2, booth_10_3, booth_10_4, booth_10_5],
    waitingAvailable: false,
  },
  {
    id: '11',
    name: ' 옥류관 동국대점 단독 개점!',
    intro: '👏 우리 북한학과가 이번 봄 축제에도 ‘독보적인 야간부-쓰‘로 돌아왔다우 👏',
    date: '2025-05-27',
    type: 'night',
    position: { lat: 37.557045, lng: 127.002732 },
    images: [booth_11_1, booth_11_2, booth_11_3],
    waitingAvailable: false,
  },
  {
    id: '12',
    name: '회계 신병',
    intro: '군대 컨셉 인기 드라마 ‘신병’ 모티브 주점',
    date: '2025-05-27',
    type: 'night',
    position: { lat:  37.557182, lng: 127.001541 },
    images: [booth_12_1, booth_12_2],
    waitingAvailable: false,
  },
  {
    id: '13',
    name: '기계로봇에너지공학과',
    intro: '안녕하십니까 기계로봇에너지공학과 17대 학생회 "STEER" 입니다.',
    date: '2025-05-27',
    type: 'night',
    position: { lat:  37.559709, lng: 126.999220 },
    images: [booth_13_1, booth_13_2],
    waitingAvailable: false,
  },
  {
    id: '14',
    name: '전자전기공학부',
    intro: '⚡️2025 동국대학교 전자전기공학부 야간부스⚡️',
    date: '2025-05-27',
    type: 'night',
    position: { lat:  37.558599, lng: 126.999103 },
    images: [booth_14_1, booth_14_2, booth_14_3],
    waitingAvailable: false,
  },
] as const;
