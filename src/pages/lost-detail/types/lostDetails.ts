import { LostTag } from "@/types/enums";

export type LostDetailType = {
  lost_id: number;
  lost_tag: LostTag;
  lost_title: string;
  lost_color: string;
  lost_brand: string;
  lost_category: string;
  lost_location: string;
  lost_note: string;
  publish_time: Date;
  lost_item_image_urls: string[];
};
