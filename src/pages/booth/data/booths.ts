import booth_1 from '@/assets/images/booth_1.webp';
import booth_2 from '@/assets/images/booth_2.jpeg';
import booth_3 from '@/assets/images/booth_3.jpg';
import booth_4 from '@/assets/images/booth_4.jpg';
import booth_5 from '@/assets/images/booth_5.png';
import booth_6 from '@/assets/images/booth_6.jpg';

export const booths = [
  {
    id: '1',
    name: '불교학과 체험존',
    intro: '명상 체험과 함께 나만의 연등 만들기를 경험해보세요!',
    date: '2025-05-27',
    type: 'day',
    position: { lat: 37.5589, lng: 126.9980 },
    image: booth_1,
    waitingAvailable: true,
  },
  {
    id: '2',
    name: '컴퓨터공학과 AI 전시관',
    intro: 'AI로 움직이는 로봇팔 시연과 학생 작품 전시를 보러오세요!',
    date: '2025-05-27',
    type: 'day',
    position: { lat: 37.5593, lng: 126.9986 },
    image: booth_2,
    waitingAvailable: false,
  },
  {
    id: '3',
    name: '경영학과 스타트업 부스',
    intro: '동국대 경영학과 학생들의 스타트업 제품을 체험해보세요!',
    date: '2025-05-27',
    type: 'day',
    position: { lat: 37.5590, lng: 126.9972 },
    image: booth_3,
    waitingAvailable: false,
  },
  {
    id: '4',
    name: '동국대 응원 부스',
    intro: '재학생과 졸업생을 위한 응원 메시지를 남겨주세요!',
    date: '2025-05-27',
    type: 'day',
    position: { lat: 37.5583, lng: 126.9975 },
    image: booth_4,
    waitingAvailable: true,
  },
  {
    id: '5',
    name: '미디어커뮤니케이션학과 게임존',
    intro: '미디어와 게임 콘텐츠를 활용한 퀴즈 이벤트에 참여해보세요!',
    date: '2025-05-28',
    type: 'day',
    position: { lat: 37.5586, lng: 126.9967 },
    image: booth_5,
    waitingAvailable: true,
  },
  {
    id: '6',
    name: '동국 플리마켓',
    intro: '재학생들이 준비한 중고책, 학과 굿즈, 간식 판매!',
    date: '2025-05-29',
    type: 'night',
    position: { lat: 37.5581, lng: 126.9988 },
    image: booth_6,
    waitingAvailable: true,
  },
] as const;
