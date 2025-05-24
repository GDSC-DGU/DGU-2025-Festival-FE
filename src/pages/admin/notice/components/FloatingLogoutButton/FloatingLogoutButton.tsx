import { StyledButton } from "./FloatingLogoutButton.styles";
import LogoutIcon from "@/assets/icons/logout-icon.svg";
import LogoutModal from "@/components/modal/logoutModal/LogoutModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FloatingLogoutButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("로그아웃 처리 실행");
    setIsModalOpen(true);
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
