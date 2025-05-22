import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 54px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 40px;
  gap: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

export const Input = styled.input`
  outline: none;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px 0px rgba(67, 56, 202, 0.25);
  background-color: white;
  color: ${({ theme }) => theme.colors.gray600};
  ${({ theme }) => theme.fonts.Body2}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => theme.fonts.Body3}
  color: red;
  width: 100%;
`;
