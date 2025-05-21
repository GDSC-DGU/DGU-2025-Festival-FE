import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
`;

export const Header = styled.header`
  padding: 12px 20px;
  font-size: 20px;
  font-weight: 600;
  color: #333c55;
  margin-top: 20px;
text-align: center;`;

export const Section = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

export const SectionDescription = styled.p`
  font-size: 12px;
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
  color: #4f46e5;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
  align-self: flex-end;
`;
