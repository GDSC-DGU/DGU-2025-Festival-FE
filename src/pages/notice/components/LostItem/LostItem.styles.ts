import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray100};
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
`;

export const IconContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const Icon = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
