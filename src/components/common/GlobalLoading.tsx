import { useGlobalLoading } from "@/hooks/useGlobalLoading";
import SkeletonLoading from "./SkeletonLoading";

const GlobalLoading = () => {
  const { isGlobalLoading } = useGlobalLoading();

  if (!isGlobalLoading) return null;

  return <SkeletonLoading message="잠시만 기다려주세요..." />;
};

export default GlobalLoading;
