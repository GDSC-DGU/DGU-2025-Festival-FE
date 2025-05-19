import { useLocation, NavLink } from 'react-router-dom';
import * as S from './BottomNav.styles';

import HomeOn from '@/assets/icons/home_on.png';
import HomeOff from '@/assets/icons/home_off.png';
import TimetableOn from '@/assets/icons/timetable_on.png';
import TimetableOff from '@/assets/icons/timetable_off.png';
import NoticeOn from '@/assets/icons/notice_on.png';
import NoticeOff from '@/assets/icons/notice_off.png';
import BoothOn from '@/assets/icons/booth_on.png';
import BoothOff from '@/assets/icons/booth_off.png';
import WaitingOn from '@/assets/icons/waiting_on.png';
import WaitingOff from '@/assets/icons/waiting_off.png';

interface NavItem {
  label: string;
  path: string;
  defaultIcon: string;
  activeIcon: string;
}

const navItems: NavItem[] = [
  { label: '홈', path: '/', defaultIcon: HomeOff, activeIcon: HomeOn },
  { label: '타임테이블', path: '/timetable', defaultIcon: TimetableOff, activeIcon: TimetableOn },
  { label: '공지', path: '/notice', defaultIcon: NoticeOff, activeIcon: NoticeOn },
  { label: '부스', path: '/booth', defaultIcon: BoothOff, activeIcon: BoothOn },
  { label: '웨이팅', path: '/waiting', defaultIcon: WaitingOff, activeIcon: WaitingOn },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <S.BottomNav>
      <ul>
        {navItems.map(({ label, path, defaultIcon, activeIcon }) => {
          const isActive = pathname === path;

          return (
            <li key={path}>
              <NavLink to={path}>
                <img src={isActive ? activeIcon : defaultIcon} alt={label} />
                <span className={isActive ? 'active' : ''}>{label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </S.BottomNav>
  );
}
