import { useLocation, NavLink } from "react-router-dom";
import { useState } from "react";
import * as S from "./BottomNav.styles";

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


interface NavItem {
  label: string;
  path: string;
  defaultIcon: string;
  activeIcon: string;
  isWaiting?: boolean; // 추가
}

const navItems: NavItem[] = [
  { label: "홈", path: "/", defaultIcon: HomeOff, activeIcon: HomeOn },
  {
    label: "타임테이블",
    path: "/timetable",
    defaultIcon: TimetableOff,
    activeIcon: TimetableOn,
  },
  {
    label: "공지/분실물",
    path: "/notice",
    defaultIcon: NoticeOff,
    activeIcon: NoticeOn,
  },
  {
    label: "부스",
    path: "/booth",
    defaultIcon: BoothOff,
    activeIcon: BoothOn,
  },
  {
    label: "웨이팅",
    path: "/waiting",
    defaultIcon: WaitingOff,
    activeIcon: WaitingOn,
  },
];

export default function BottomNav() {
  const { pathname } = useLocation();
  const [, setShowWaitingModal] = useState(false);

  const handleClick = (item: NavItem) => {
    if (item.isWaiting) {
      setShowWaitingModal(true);
      return;
    }
    // window.location.href = item.path; // <-- 나중에 원래 기능 복구할 때 사용
  };

  return (
    <>
      <S.BottomNav>
        <ul>
          {navItems.map((item) => {
            const isActive =
              pathname === item.path || pathname.startsWith(`${item.path}/`);

            return (
              <li key={item.path}>
                {item.isWaiting ? (
                  <button onClick={() => handleClick(item)}>
                    <img
                      src={isActive ? item.activeIcon : item.defaultIcon}
                      alt={item.label}
                    />
                    <span className={isActive ? "active" : ""}>{item.label}</span>
                  </button>
                ) : (
                  <NavLink to={item.path}>
                    <img
                      src={isActive ? item.activeIcon : item.defaultIcon}
                      alt={item.label}
                    />
                    <span className={isActive ? "active" : ""}>{item.label}</span>
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </S.BottomNav>
    </>
  );
}
