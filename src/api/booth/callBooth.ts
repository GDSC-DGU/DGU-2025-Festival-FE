import { adminInstance } from "../instance";
import { sendRequest } from "../request";

export const callBooth = (reserveId: string) =>
  sendRequest(adminInstance, "POST", "/pub/call", { reserveId });
