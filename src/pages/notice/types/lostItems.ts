import { LostTag } from "@/types/enums";

export type LostItemType = {
  lost_id: number;
  lost_tag_name: LostTag;
  publish_time: Date;
  lost_item_image_urls: string[];
};
