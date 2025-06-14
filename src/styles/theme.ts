export const fonts = {
  TimeTable: {
    fontFamily: "Playfair Display",
    fontSize: 40,
    fontWeight: "500",
    lineHeight: "60px",
  },
  TimeTableSub: {
    fontFamily: "Playfair Display",
    fontSize: 30,
    fontWeight: "600",
    lineHeight: "40px",
  },
  Head1: {
    fontFamily: "Pretendard Variable",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: "28px",
  },
  Head2: {
    fontFamily: "Pretendard Variable",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: "24px",
  },
  Head3: {
    fontFamily: "Pretendard Variable",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: "20px",
  },
  Body1: {
    fontFamily: "Pretendard Variable",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: "24px",
  },
  Body1B: {
    fontFamily: "Pretendard Variable",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: "24px",
  },
  Body2: {
    fontFamily: "Pretendard Variable",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: "20px",
  },
  Body2B: {
    fontFamily: "Pretendard Variable",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: "20px",
  },
  Body3: {
    fontFamily: "Pretendard Variable",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: "16px",
  },
  Button1: {
    fontFamily: "Pretendard Variable",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: "20px",
  },
  Button2: {
    fontFamily: "Pretendard Variable",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: "16px",
  },
  Chips: {
    fontFamily: "Pretendard Variable",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: "16px",
  },
  Caption: {
    fontFamily: "Pretendard Variable",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: "12px",
  },
  Alert: {
    fontFamily: "Pretendard Variable",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: "24px",
  },
} as const;

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  indigo50: "#EEF2FF",
  indigo100: "#E0E7FF",
  indigo200: "#C7D2FE",
  indigo300: "#A5B4FC",
  indigo400: "#818CF8",
  indigo500: "#6366F1",
  indigo600: "#4F46E5",
  indigo700: "#4338CA",
  indigo800: "#3730A3",
  indigo900: "#312E81",

  gray50: "#F8F9FC",
  gray100: "#F1F3F9",
  gray200: "#E2E5F0",
  gray300: "#CBD1E1",
  gray400: "#949DB8",
  gray500: "#646E8B",
  gray600: "#475069",
  gray700: "#333C55",
  gray800: "#1E253B",
  gray900: "#0F162A",
} as const;

export const gradients = {
  purple: "linear-gradient(180deg, #060032 0%, #575BDF 89%)",
  orange: "linear-gradient(180deg, #F04F37 0%, #FFCCB0 100%)",
  header: "linear-gradient(180deg, #575BDF 0%,  #060032 100%)",
  rankingBox1:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.90) 48.87%, rgba(255, 255, 255, 0.00) 390.51%)",
  rankingBox2:
    "linear-gradient(179deg, rgba(255, 255, 255, 0.80) 37.23%, rgba(153, 153, 153, 0.00) 240.09%)",
} as const;

const theme = {
  colors: colors,
  fonts: fonts,
  gradients: gradients,
};

export default theme;
