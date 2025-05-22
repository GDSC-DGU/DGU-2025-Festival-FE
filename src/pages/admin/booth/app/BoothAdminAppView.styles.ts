import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  padding-top: 54px;
`;

export const Section = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  ${({ theme }) => theme.fonts.Head3};
  margin: 0;
`;

export const SectionDescription = styled.p`
  ${({ theme }) => theme.fonts.Body3};
  color: #6b7280;
  margin: 0;
`;

export const BoothListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const Footer = styled.footer`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  box-shadow: 0px -2px 8px rgba(79, 70, 229, 0.1);
`;

export const TotalCount = styled.div`
  color: ${({ theme }) => theme.colors.indigo600};
  ${({ theme }) => theme.fonts.Body2B}
  margin-bottom: 8px;
  align-self: flex-end;
`;
