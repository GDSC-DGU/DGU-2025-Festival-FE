import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  padding-top: 54px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
`;

export const ToolbarRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const WaitingCheckButton = styled.button`
  position: relative;
  background-color: white;
  color: #575bdf;
  border: 2px solid #575bdf;
  border-radius: 32px;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.95;
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e94a85;
  color: white;
  font-size: 12px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
