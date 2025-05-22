import { LostTag } from "@/types/enums";

export type LostItemType = {
  lost_id: number;
  lost_tag_name: LostTag;
  publish_time: Date;
  lost_item_image_urls: string[];
};

export const lostItems: LostItemType[] = [
  {
    lost_id: 1,
    lost_tag_name: LostTag.CLOTH,
    lost_item_image_urls: [
      "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20230830/20230830033031521.jpg",
    ],
    publish_time: new Date(),
  },
  {
    lost_id: 2,
    lost_tag_name: LostTag.DEVICE,
    lost_item_image_urls: [
      "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20240104/20240104091146627.jpeg",
    ],
    publish_time: new Date(),
  },
  {
    lost_id: 3,
    lost_tag_name: LostTag.WALLET,
    lost_item_image_urls: [
      "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220228/20220228031042881.jpg",
    ],
    publish_time: new Date(),
  },
  {
    lost_id: 4,
    lost_tag_name: LostTag.ETC,
    lost_item_image_urls: [
      "https://oldhome.kau.ac.kr/web/cmm/imageSrc.do?path=2bce460d0b81071dc14f05fadccee8f6&physical=6c34b463ee1302acbf94cca5d985a78aa28d9c7824a9690de9cf533a71e530a4d0409bec8def4267276dc76cf51873f6&contentType=da462b206e7e7f9d239672271a582daa",
    ],
    publish_time: new Date(),
  },
  {
    lost_id: 5,
    lost_tag_name: LostTag.CLOTH,
    lost_item_image_urls: [
      "https://libk.dongguk.ac.kr/upload/userfiles/images/201906-023.jpg",
    ],
    publish_time: new Date(),
  },
  {
    lost_id: 6,
    lost_tag_name: LostTag.WALLET,
    lost_item_image_urls: [
      "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20240330/20240330090021139.jpg",
    ],
    publish_time: new Date(),
  },
  {
    lost_id: 7,
    lost_tag_name: LostTag.BEAUTY,
    lost_item_image_urls: [
      "https://my.snu.ac.kr/dext5editor/handler/image_handler.jsp?fn=%2F2025%2F01%2F20250122_103007451_27469.jpg",
    ],
    publish_time: new Date(),
  },
  {
    lost_id: 8,
    lost_tag_name: LostTag.CLOTH,
    lost_item_image_urls: [
      "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220429/20220429110652253.jpg",
    ],
    publish_time: new Date(),
  },
];
