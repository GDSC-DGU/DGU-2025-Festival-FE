// src/components/layout/Layout.styles.ts
import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--gray-50);
`;

export const AppWrapper = styled.div`
  width: 375px; /* ✅ 앱 뷰 고정 폭 */
  min-height: 100dvh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow-x: hidden;
`;

export const AppMain = styled.main`
  flex: 1;
  padding-bottom: 56px;
`;
