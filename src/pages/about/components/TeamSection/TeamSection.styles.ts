import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
  width: 100px;
  gap: 8px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.p`
  ${({ theme }) => theme.fonts.Body2B};
  text-align: center;
`;

export const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-content: center;
  gap: 16px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Head3};
  margin-bottom: 8px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  gap: 60px;
`;

export const Content = styled.div`
  ${({ theme }) => theme.fonts.Body3}
  /* background-color: ${({ theme }) => theme.colors.indigo50}; */
  border-radius: 10px;
  text-align: center;
  word-break: keep-all;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 10%;
  }
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0;
  gap: 20px;
`;
