export type BoothType = "day" | "night";

export interface Booth {
  pubStatus?: "AVAILABLE" | "FULL" | "PREPARING" | "END";
  id: string;
  name: string;
  intro: string;
  date: string; // yyyy-MM-dd
  type: BoothType;
  position?: {
    lat: number;
    lng: number;
  };
  images: string[];
  likes?: number;
  waitingAvailable?: boolean;
  waitingCount?: number;
  department?: string;
  isLinenow?: boolean;
  linenowLink?: string;
  isManage?: boolean;
}

export interface BoothRankingItem {
  ranking: number;
  id: string;
  name: string;
  intro: string;
  image?: string;
  score: string;
}
