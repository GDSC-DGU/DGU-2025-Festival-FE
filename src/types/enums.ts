// export const enum LostTag {
//   CLOTH = "가방/의류",
//   DEVICE = "전자기기",
//   WALLET = "지갑",
//   CARD = "카드류",
//   BEAUTY = "화장품",
//   ETC = "기타",
// }

export const LostTag = {
  CLOTH: "가방/의류",
  DEVICE: "전자기기",
  WALLET: "지갑",
  CARD: "카드류",
  BEAUTY: "화장품",
  ETC: "기타",
} as const;

export type LostTag = keyof typeof LostTag;
