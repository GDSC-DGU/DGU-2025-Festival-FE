import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

dayjs.locale("ko-numeric", {
  name: "ko-numeric",
  relativeTime: {
    future: "%s 후",
    past: "%s 전",
    s: "몇 초",
    m: "1분",
    mm: "%d분",
    h: "1시간",
    hh: "%d시간",
    d: "1일",
    dd: "%d일",
    M: "1개월",
    MM: "%d개월",
    y: "1년",
    yy: "%d년",
  },
});
