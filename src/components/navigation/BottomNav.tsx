import { useLocation, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import * as S from "./BottomNav.styles";
import { useNavigate } from "react-router-dom";
import HomeOn from "@/assets/icons/home_on.png";
import HomeOff from "@/assets/icons/home_off.png";
import TimetableOn from "@/assets/icons/timetable_on.png";
import TimetableOff from "@/assets/icons/timetable_off.png";
import NoticeOn from "@/assets/icons/notice_on.png";
import NoticeOff from "@/assets/icons/notice_off.png";
import BoothOn from "@/assets/icons/booth_on.png";
import BoothOff from "@/assets/icons/booth_off.png";
import WaitingOn from "@/assets/icons/waiting_on.png";
import WaitingOff from "@/assets/icons/waiting_off.png";
import CheckModal from "../modal/checkModal/CheckModal";

interface NavItem {
  label: string;
  path: string;
  defaultIcon: string;
  activeIcon: string;
  isClosed: boolean;
}

const navItems: NavItem[] = [
  {
    label: "홈",
    path: "/",
    defaultIcon: HomeOff,
    activeIcon: HomeOn,
    isClosed: true,
  },
  {
    label: "타임테이블",
    path: "/timetable",
    defaultIcon: TimetableOff,
    activeIcon: TimetableOn,
    isClosed: true,
  },
  {
    label: "공지/분실물",
    path: "/notice",
    defaultIcon: NoticeOff,
    activeIcon: NoticeOn,
    isClosed: false,
  },
  {
    label: "부스",
    path: "/booth",
    defaultIcon: BoothOff,
    activeIcon: BoothOn,
    isClosed: true,
  },
  {
    label: "웨이팅",
    path: "/waiting",
    defaultIcon: WaitingOff,
    activeIcon: WaitingOn,
    isClosed: true,
  },
];

export default function BottomNav() {
  const { pathname } = useLocation();
  // const [, setShowWaitingModal] = useState(false);
  const [showClosedModal, setShowClosedModal] = useState(false);
  const navigate = useNavigate();
  // const handleClick = (item: NavItem) => {
  //   if (item.isWaiting) {
  //     setShowWaitingModal(true);
  //     return;
  //   }
  //   // window.location.href = item.path; // <-- 나중에 원래 기능 복구할 때 사용
  // };

  const handleClick = (item: NavItem) => {
    if (item.isClosed) {
      setShowClosedModal(true);
    }
  };

  useEffect(() => {
    const currentNav = navItems.find(
      (item) => pathname === item.path || pathname.startsWith(`${item.path}/`)
    );

    if (currentNav && currentNav.isClosed) {
      setShowClosedModal(true);
      navigate("/notice", { replace: true });
    }
  }, [pathname, navigate]);

  return (
    <>
      <S.BottomNav>
        <ul>
          {navItems.map((item) => {
            const isActive =
              pathname === item.path ||
              pathname.startsWith(`${item.path}/`) ||
              (item.path === "/" && pathname === "/about");

            return (
              <li key={item.path}>
                {item.isClosed ? (
                  <button onClick={() => handleClick(item)}>
                    <img
                      src={isActive ? item.activeIcon : item.defaultIcon}
                      alt={item.label}
                    />
                    <span className={isActive ? "active" : ""}>
                      {item.label}
                    </span>
                  </button>
                ) : (
                  <NavLink to={item.path}>
                    <img
                      src={isActive ? item.activeIcon : item.defaultIcon}
                      alt={item.label}
                    />
                    <span className={isActive ? "active" : ""}>
                      {item.label}
                    </span>
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </S.BottomNav>
      {showClosedModal && (
        <CheckModal
          title="해당 메뉴로 이동할 수 없어요"
          content={
            <>
              지금은 공지사항/분실물만 제공하고 있습니다. <br />
              다음 축제에서 만나요!
            </>
          }
          onClose={() => {
            setShowClosedModal(false);
          }}
        />
      )}
    </>
  );
}
