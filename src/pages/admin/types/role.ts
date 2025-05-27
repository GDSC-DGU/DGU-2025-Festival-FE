// export enum Role {
//   ADFESTA = "ADFESTA",
//   ADPUB = "ADPUB",
// }

export const Role = {
  ADFESTA: "ADFESTA",
  ADPUB: "ADPUB",
} as const;

export type Role = keyof typeof Role; // "ADFESTA" | "ADPUB"
