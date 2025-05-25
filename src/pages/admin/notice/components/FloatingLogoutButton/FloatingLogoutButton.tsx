import { StyledButton } from "./FloatingLogoutButton.styles";
import LogoutIcon from "@/assets/icons/logout-icon.svg";
import LogoutModal from "@/components/modal/logoutModal/LogoutModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore";

const FloatingLogoutButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <>
      <StyledButton onClick={() => setIsModalOpen(true)}>
        <img src={LogoutIcon} alt="로그아웃" width={24} height={24} />
      </StyledButton>
      {isModalOpen && (
        <LogoutModal
          onCancel={() => setIsModalOpen(false)}
          onConfirm={handleLogout}
        />
      )}
    </>
  );
};

export default FloatingLogoutButton;
