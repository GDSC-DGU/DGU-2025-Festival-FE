export interface Booth {
    id: string;
    name: string;
    intro: string;
    date: string;
    type: 'day' | 'night';
    position: { lat: number; lng: number };
    image: string;
    likes: number; 
    waitingAvailable?: boolean;
  }

export const booths = [
    {
      id: 'booth-1',
      name: '주스 스탠드',
      intro: '신선한 과일 주스를 팝니다.',
      date: '2025-05-27',
      type: 'day',
      position: { lat: 37.5585, lng: 126.9982 },
        image: '/images/booth-juice.png',
        waitingAvailable: true,

    },
    {
      id: 'booth-2',
      name: '굿즈 판매소',
      intro: '한정판 굿즈를 판매 중입니다.',
      date: '2025-05-27',
      type: 'night',
      position: { lat: 37.5591, lng: 126.9977 },
        image: '/images/booth-goods.png',
        waitingAvailable: true,

    },
    {
      id: 'booth-3',
      name: '게임 존',
      intro: '미니 게임에 참여하고 상품을 받아가세요!',
      date: '2025-05-28',
      type: 'day',
      position: { lat: 37.5589, lng: 126.9989 },
        image: '/images/booth-game.png',
        waitingAvailable: true,

    },
    {
      id: 'booth-4',
      name: '플리마켓',
      intro: '학생들이 직접 준비한 중고물품 마켓입니다.',
      date: '2025-05-29',
      type: 'night',
      position: { lat: 37.5582, lng: 126.9980 },
        image: '/images/booth-fleamarket.png',
        waitingAvailable: true,

    },
  ];
  