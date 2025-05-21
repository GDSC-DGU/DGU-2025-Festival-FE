export type NoticeItemType = {
  notice_id: number;
  notice_title: string;
  publish_time: Date;
};

export const noticeItems: NoticeItemType[] = [
  {
    notice_id: 1,
    notice_title: "어플 이용 시 주의사항",
    publish_time: new Date(),
  },
  {
    notice_id: 2,
    notice_title: "축제 일정 변경 안내",
    publish_time: new Date(),
  },
  {
    notice_id: 3,
    notice_title: "긴급 점검 공지 안내",
    publish_time: new Date(),
  },
];
