import { adminInstance } from "@/api/instance";
import { sendRequest } from "@/api/request";

export const updateBoothStatus = (
  status: "AVAILABLE" | "FULL" | "END"
) => {
  const url = `/pub?pubsStatus=${status}`;
  return sendRequest<boolean>(
    adminInstance,
    "PATCH",
    url
  );
};
