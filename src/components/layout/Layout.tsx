import { Outlet } from 'react-router-dom';
import BottomNav from '@/components/navigation/BottomNav';
import * as S from './Layout.styles';

export default function Layout() {
  return (
    <S.AppContainer>
      <S.AppWrapper>
        <S.AppMain>
          <Outlet />
        </S.AppMain>
        <BottomNav />
      </S.AppWrapper>
    </S.AppContainer>
  );
}
