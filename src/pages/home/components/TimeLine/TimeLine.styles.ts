import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  width: 70%;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.indigo900};
`;

export const PerformerImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const PerformerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const Performer = styled.p`
  ${({ theme }) => theme.fonts.Body1B}
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.Body3}
`;

export const TimeDescription = styled.p`
  ${({ theme }) => theme.fonts.Body2}
`;
