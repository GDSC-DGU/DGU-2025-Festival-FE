import { Outlet, useLocation } from 'react-router-dom';
import * as S from './Layout.styles';
import BottomNav from '@/components/navigation/BottomNav';
import mainBgImage from '@/assets/background/main_bg.png';

export default function Layout() {
  const { pathname } = useLocation();

  const isBgPage = pathname === '/' || pathname === '/timetable' || pathname.startsWith('/booth');
  const backgroundImage = isBgPage ? mainBgImage : undefined;

  return (
    <S.AppContainer>
      <S.AppWrapper $backgroundImage={backgroundImage}>
        <S.AppMain>
          <Outlet />
        </S.AppMain>
        <BottomNav />
      </S.AppWrapper>
    </S.AppContainer>
  );
}
