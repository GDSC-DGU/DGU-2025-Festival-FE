import { timetableData } from "@/pages/timetable/data/timetableData";

export const getCurrentPerformance = () => {
  const now = new Date();
  const today = now.toISOString().split("T")[0]; // '2025-05-28' 형태

  const currentTime = now.getHours() * 60 + now.getMinutes();

  return timetableData.find((item) => {
    if (item.date !== today) return false;

    const [startH, startM] = item.start.split(":").map(Number);
    const [endH, endM] = item.end.split(":").map(Number);

    const startMin = startH * 60 + startM;
    const endMin = endH * 60 + endM;

    return currentTime >= startMin && currentTime < endMin;
  });
};
