export type LostItemType = {
  lost_id: number;
  lost_category_id: number;
  lost_item_image_url: string;
  publish_time: Date;
};

export const lostItems: LostItemType[] = [
  {
    lost_id: 1,
    lost_category_id: 1,
    lost_item_image_url:
      "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20230830/20230830033031521.jpg",
    publish_time: new Date(),
  },
  {
    lost_id: 2,
    lost_category_id: 1,
    lost_item_image_url:
      "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20240104/20240104091146627.jpeg",
    publish_time: new Date(),
  },
  {
    lost_id: 3,
    lost_category_id: 1,
    lost_item_image_url:
      "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220228/20220228031042881.jpg",
    publish_time: new Date(),
  },
];
