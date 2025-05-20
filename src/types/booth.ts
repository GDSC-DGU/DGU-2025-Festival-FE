export type BoothType = 'day' | 'night';

export interface Booth {
  id: string;
  name: string;
  intro: string;
  date: string; // yyyy-MM-dd
  type: BoothType;
  position: {
    lat: number;
    lng: number;
  };
  image: string;
  likes?: number;
  waitingAvailable?: boolean;
  waitingCount?: number;
  department?: string;
}
