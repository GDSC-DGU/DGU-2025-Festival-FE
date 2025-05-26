import { useQuery } from "@tanstack/react-query";
import { sendRequest } from "@/api/request";
import { adminInstance } from "@/api/instance";

export interface ReserveItem {
  reserveId: string;
  reserveName: string;
  phoneNumber: string;
  reserveMembers: number;
  status: "WAITING" | "CALLED" | "LATE";
  elapsedTime: number | null;
}

interface ReserveListResponse {
  waitingTotalCount: number;
  lateTotalCount: number;
  reserveList: ReserveItem[];
}

export const fetchReserveList = async (): Promise<ReserveListResponse> => {
  const response = await sendRequest<ReserveListResponse>(adminInstance, "GET", "/pub");
  if ("data" in response && response.data) {
    return response.data;
  }
  
  const errorMessage = (response as { message?: string }).message ?? "Failed to fetch reserve list";
  throw new Error(errorMessage);
};

export const useReserveList = () => {
  return useQuery<ReserveListResponse>({
    queryKey: ["admin-reserve-list"],
    queryFn: fetchReserveList,
    refetchInterval: 10 * 1000, 
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
};
