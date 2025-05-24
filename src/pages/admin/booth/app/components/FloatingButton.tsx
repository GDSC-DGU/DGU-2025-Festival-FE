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

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleBoothCloseConfirm = (type: "soldout" | "timeover") => {
    console.log(`부스 종료 타입: ${type}`);
    setShowCloseModal(false);
  };

  const handleLogoutConfirm = () => {
    console.log("로그아웃 처리 실행");
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
