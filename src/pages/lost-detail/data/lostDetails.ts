import { LostTag } from "@/types/enums";

export type LostDetailType = {
  lost_id: number;
  lost_tag: LostTag;
  lost_title: string;
  lost_color: string;
  lost_brand: string;
  lost_category_name: string;
  lost_location: string;
  lost_note: string;
  publish_time: Date;
  lost_item_image_urls: string[];
};

export const lostDetails: LostDetailType[] = [
  {
    lost_id: 1,
    lost_category_name: "전자기기",
    lost_title: "무선 이어폰 분실",
    lost_color: "Black",
    lost_brand: "Samsung",
    lost_location: "학생회관 2층",
    lost_note: "검은색 무선 이어폰 케이스 포함입니다.",
    lost_tag: LostTag.DEVICE,
    lost_item_image_urls: [
      "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20230830/20230830033031521.jpg",
    ],
    publish_time: new Date(),
  },
  {
    lost_id: 2,
    lost_category_name: "의류",
    lost_title: "회색 니트 분실",
    lost_color: "Gray",
    lost_brand: "Uniqlo",
    lost_location: "도서관 1층",
    lost_note: "왼쪽 팔에 실밥이 튿어져 있음",
    lost_tag: LostTag.CLOTH,
    lost_item_image_urls: [
      "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20240104/20240104091146627.jpeg",
    ],
    publish_time: new Date(),
  },
  {
    lost_id: 3,
    lost_category_name: "지갑",
    lost_title: "검은색 지갑 분실",
    lost_color: "검은색",
    lost_brand: "Uniqlo",
    lost_location: "도서관 1층",
    lost_note: "왼쪽 팔에 실밥이 튿어져 있음",
    lost_tag: LostTag.WALLET,
    lost_item_image_urls: [
      "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220228/20220228031042881.jpg",
    ],
    publish_time: new Date(),
  },
];
