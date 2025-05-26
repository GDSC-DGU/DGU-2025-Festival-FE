import { adminInstance } from "../instance";
import { sendRequest } from "../request";

export const completeVisit = (reserveId: string) =>
  sendRequest(adminInstance, "PATCH", "/pub/reserve", { reserveId });
