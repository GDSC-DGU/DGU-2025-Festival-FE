export interface WaitingBooth {
  id: string;
  name: string;
  waitingCount: number;
  isCalling: boolean;
  calledAt?: string;
  phone: string;
  order?: number; // 몇번째인지
}

export const dummyWaitingBooths: WaitingBooth[] = [
  {
    id: 'waiting-1',
    name: '치이카와',
    waitingCount: 5,
    isCalling: false,
    phone: '01012340001',
    order: 1,
  },
  {
    id: 'waiting-2',
    name: '가나디',
    waitingCount: 3,
    isCalling: true,
    calledAt: new Date(Date.now() - 6 * 60 * 1000).toISOString(),
    phone: '01012340002',
    order: 2,
  },
  {
    id: 'waiting-3',
    name: '몰랑이',
    waitingCount: 2,
    isCalling: true,
    calledAt: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    phone: '01012340003',
    order: 3,
  },
  {
    id: 'waiting-4',
    name: '포켓몬',
    waitingCount: 7,
    isCalling: false,
    phone: '01012340004',
    order: 4,
  },
  {
    id: 'waiting-5',
    name: '스누피',
    waitingCount: 4,
    isCalling: true,
    calledAt: new Date(Date.now() - 8 * 60 * 1000).toISOString(),
    phone: '01012340005',
    order: 5,
  },
  {
    id: 'waiting-6',
    name: '도라에몽',
    waitingCount: 6,
    isCalling: false,
    phone: '01012340006',
    order: 6,
  },
  {
    id: 'waiting-7',
    name: '쿠로미',
    waitingCount: 3,
    isCalling: true,
    calledAt: new Date(Date.now() - 1 * 60 * 1000).toISOString(),
    phone: '01012340007',
    order: 7,
  },
  {
    id: 'waiting-8',
    name: '헬로키티',
    waitingCount: 8,
    isCalling: false,
    phone: '01012340008',
    order: 8,
  },
  {
    id: 'waiting-9',
    name: '리락쿠마',
    waitingCount: 2,
    isCalling: true,
    calledAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    phone: '01012340009',
    order: 9,
  },
  {
    id: 'waiting-10',
    name: '산리오',
    waitingCount: 5,
    isCalling: false,
    phone: '01012340010',
    order: 10,
  },
];
