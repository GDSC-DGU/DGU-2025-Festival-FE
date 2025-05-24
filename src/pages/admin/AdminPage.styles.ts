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

export const RoleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 16px;
  padding-bottom: 20px;
`;
export const RoleBox = styled.button<{ $selected: boolean }>`
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.indigo300 : theme.colors.indigo100};
  color: ${({ theme }) => theme.colors.indigo900};
  border: ${({ theme, $selected }) =>
    $selected ? `2px solid ${theme.colors.indigo600}` : "none"};
  box-shadow: ${({ theme, $selected }) =>
    $selected
      ? "0 0 10px rgba(67, 56, 202, 0.3)"
      : `0 0 5px ${theme.colors.gray200}`};

  width: 100%;
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(67, 56, 202, 0.2);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const RoleText = styled.p`
  ${({ theme }) => theme.fonts.Button1};
  color: ${({ theme }) => theme.colors.indigo900};
`;
