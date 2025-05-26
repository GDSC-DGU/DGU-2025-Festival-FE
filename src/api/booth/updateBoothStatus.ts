import { adminInstance } from "../instance";
import { sendRequest } from "../request";

export const updateBoothStatus = (
  status: "AVAILABLE" | "FULL" | "END"
) => {
  const url = `/pub?pubsStatus=${status}`;
  return sendRequest<boolean>(adminInstance, "PATCH", url);
};
