import { useState } from "react";
import {
  ButtonWrapper,
  Fab,
  ToggleMenu,
  MenuItem,
} from "./FloatingButton.styles";
import logoutIcon from "@/assets/icons/logout.svg";
import powerIcon from "@/assets/icons/power.svg";
import menuIcon from "@/assets/icons/menu.png";
import closeIcon from "@/assets/icons/close-menu.png";
import BoothCloseModal from "../Modal/BoothCloseModal";
import LogoutModal from "@/components/modal/logoutModal/LogoutModal";
import { useAuthStore } from "@/stores/useAuthStore";
import { updateBoothStatus } from "@/api/booth/adminBooth";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const logout = useAuthStore((state) => state.logout);

  const handleBoothCloseConfirm = async (reason: "soldout" | "timeover") => {
    try {
      await updateBoothStatus("END"); 
      alert(`부스가 '${reason === "soldout" ? "재료 소진" : "운영 종료"}'로 종료되었습니다.`);
    } catch (err) {
      console.error("부스 종료 실패:", err);
      alert("부스 종료에 실패했습니다.");
    }
  
    setShowCloseModal(false);
  };
  
  

  const handleLogoutConfirm = () => {
    logout();
    setShowLogoutModal(false);
  };
  

  return (
    <>
      <ButtonWrapper>
        {isOpen && (
          <ToggleMenu>
            <MenuItem onClick={() => setShowLogoutModal(true)}>
              <img src={logoutIcon} alt="logout" />
            </MenuItem>
            <MenuItem onClick={() => setShowCloseModal(true)}>
              <img src={powerIcon} alt="shutdown" />
            </MenuItem>
          </ToggleMenu>
        )}

        <Fab onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? closeIcon : menuIcon} alt="toggle" />
        </Fab>
      </ButtonWrapper>

      {showCloseModal && (
        <BoothCloseModal
          onCancel={() => setShowCloseModal(false)}
          onConfirm={handleBoothCloseConfirm}
        />
      )}

      {showLogoutModal && (
        <LogoutModal
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={handleLogoutConfirm}
        />
      )}
    </>
  );
};

export default FloatingButton;
