import Artist7 from "@/assets/lineup/다듀.webp";
import Artist2 from "@/assets/lineup/빈지노.webp";
import Artist3 from "@/assets/lineup/엔시티드림.webp";
import Artist6 from "@/assets/lineup/씨엔블루.webp";
import Artist8 from "@/assets/lineup/윤하.webp";
import Artist1 from "@/assets/lineup/카더가든.webp";
import Artist4 from "@/assets/lineup/크러쉬.webp";
import Artist5 from "@/assets/lineup/키오라.webp";

export interface SingerItemType {
  id: number;
  name: string;
  englishName: string;
  imageUrl: string;
  date: string;
  instagram: string;
  hashtags?: string[];
}

export const singerData: SingerItemType[] = [
  {
    id: 1,
    name: "카더가든",
    englishName: "Car, the garden",
    imageUrl: Artist1,
    date: "2025-05-28",
    instagram: "carthegarden",
    hashtags: ["#그날처럼", "#HomeSweetHome", "#나무"],
  },
  {
    id: 2,
    name: "빈지노",
    englishName: "Beenzino",
    imageUrl: Artist2,
    date: "2025-05-28",
    instagram: "realisshoman",
    hashtags: ["#AquaMan", "#Break", "#Picasso"],
  },
  {
    id: 3,
    name: "엔시티 드림",
    englishName: "NCT Dream",
    imageUrl: Artist3,
    date: "2025-05-28",
    instagram: "nct_dream",
    hashtags: ["#Candy", "#ISTJ", "#HelloFuture"],
  },
  {
    id: 4,
    name: "크러쉬",
    englishName: "Crush",
    imageUrl: Artist4,
    date: "2025-05-28",
    instagram: "crush9244",
    hashtags: ["#가끔", "#NAPPA", "#Beautiful"],
  },
  {
    id: 5,
    name: "키스오브라이프",
    englishName: "Kiss of Life",
    imageUrl: Artist5,
    date: "2025-05-29",
    instagram: "kissoflife_s2",
    hashtags: ["#Shhh", "#BadNews", "#Sticky"],
  },
  {
    id: 6,
    name: "씨엔블루",
    englishName: "CNBLUE",
    imageUrl: Artist6,
    date: "2025-05-29",
    instagram: "cnblue.official",
    hashtags: ["#외톨이야", "#Love", "#이렇게예뻤나"],
  },
  {
    id: 7,
    name: "다이나믹 듀오",
    englishName: "Dynamic Duo",
    imageUrl: Artist7,
    date: "2025-05-29",
    instagram: "givenejoah",
    hashtags: ["#죽일놈", "#BAAAM", "#고백"],
  },
  {
    id: 8,
    name: "윤하",
    englishName: "YOUNHA",
    imageUrl: Artist8,
    date: "2025-05-29",
    instagram: "younha_holic",
    hashtags: ["#혜성", "#사건의지평선", "#비밀번호486"],
  },
];
