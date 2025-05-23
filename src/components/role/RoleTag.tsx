import { TagContainer } from "./RoleTag.styles";
import { useAuthStore } from "@/stores/useAuthStore";
import { Role } from "@/pages/admin/types/role";
const RoleTag = () => {
  const { role } = useAuthStore();

  let roleText: string | null = null;

  if (role === Role.ADFESTA) {
    roleText = "축제 기획단";
  } else if (role === Role.ADPUB) {
    roleText = "부스 운영진";
  }
  return roleText ? <TagContainer>{roleText}</TagContainer> : null;
};

export default RoleTag;
