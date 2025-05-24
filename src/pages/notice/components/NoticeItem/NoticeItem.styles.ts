import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  gap: 10px;
  background-color: white;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.gray300};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleText = styled.p`
  ${({ theme }) => theme.fonts.Head3};
  color: ${({ theme }) => theme.colors.gray700};
`;

export const DateText = styled.p`
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.gray500};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 4px;
`;

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  color: black;
  ${({ theme }) => theme.fonts.Body3}
  white-space: nowrap;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  ${({ theme }) => theme.fonts.Body3}
  white-space: nowrap;
`;
