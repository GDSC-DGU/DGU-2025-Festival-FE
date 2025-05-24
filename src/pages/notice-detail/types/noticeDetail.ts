export type NoticeDetailType = {
  notice_id: number;
  notice_title: string;
  notice_content: string;
  publish_time: Date;
  image_urls: ImageListType[];
};

export type ImageListType = {
  notice_image_id: number;
  notice_id: number;
  notice_image_url: string;
};
