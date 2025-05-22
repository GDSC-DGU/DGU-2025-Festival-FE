import styled from "styled-components";

export const CardWrapper = styled.div<{ highlightLate?: boolean }>`
  width: 305px;
  padding: 20px;
  background: ${({ highlightLate }) => (highlightLate ? "#FEF2F2" : "white")};
  box-shadow: 0px 0px 4px rgba(67, 56, 202, 0.25);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Head3};
  color: #333c55;
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.Body3};
  color: #646e8b;

  span {
    color: #4338ca;
    font-weight: 700;
    margin-left: 4px;
  }
`;

export const ElapsedText = styled.div`
  font-size: 10px;
  color: #949db8;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 2px;
  margin-left: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`;

// 공통 버튼 스타일
const baseButton = `
  padding: 8px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;

// 호출
export const CallButton = styled.button`
  ${baseButton}
  background-color: #4f46e5;
  color: white;
  border: none;
`;

// 호출 중
export const CalledText = styled.div`
  ${baseButton}
  color: #949db8;
  border: none;
  margin-left: 16px;
  margin-bottom: -5px;
`;

// 방문 완료 버튼
export const VisitButton = styled.button`
  ${baseButton}
  background-color: #4f46e5;
  color: white;
  border: none;
`;

// 대기 삭제 버튼
export const DeleteButton = styled.button`
  ${baseButton}
  background-color: white;
  color: #949db8;
  border: 1px solid #cbd1e1;
`;

// 방문 완료 텍스트
export const VisitedText = styled.div`
  font-size: 14px;
  color: #6b7280;
  font-family: "Pretendard", sans-serif;
`;

// 대기 취소 텍스트
export const CancelledText = styled.div`
  font-size: 14px;
  color: #9ca3af;
  font-family: "Pretendard", sans-serif;
  font-style: italic;
`;

export const OrderText = styled.div`
  font-size: 13px;
  color: #4f46e5;
  font-weight: 700;
  margin-bottom: 2px;
`;
