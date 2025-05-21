import styled from 'styled-components';


// 버튼 전체 래퍼 (화면 오른쪽 아래 고정)
export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0px;
  z-index: 999;
`;

// 토글된 메뉴 전체
export const ToggleMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-bottom: 8px;
`;

// 개별 메뉴 항목 (텍스트 + 아이콘)
export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  margin-right: -7px;
  background: transparent;
  border: none;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Pretendard', sans-serif;
  color: #333c55;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
  }
`;

// 햄버거 + 닫기 버튼 (FAB)
export const Fab = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #e0e7ff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #d0d8f8;
  }
`;
