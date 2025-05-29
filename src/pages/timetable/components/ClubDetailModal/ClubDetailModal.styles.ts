import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const NullContainer = styled.div`
  padding: 20px;
  ${({ theme }) => theme.fonts.Button2}
  background-color: ${({ theme }) => theme.colors.gray100};
  width: 100%;
  text-align: center;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const ModalWrapper = styled.div`
  background: white;
  border-radius: 10px;
  padding: 24px;
  max-width: 340px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  max-height: 90vh;
  overflow-y: auto;
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
`;

export const Tag = styled.div`
  position: relative;
  padding: 6px 24px;
  border-radius: 20px;
  ${({ theme }) => theme.fonts.Button2}
  z-index: 0;
  overflow: hidden;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.indigo700}; /* 보더 그라데이션 */
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }

  color: ${({ theme }) => theme.colors.indigo700};
`;

export const ClubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.gray200};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Head3}
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.Body3}
  color: black;
  word-break: keep-all;
`;

export const SongList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
  max-height: 240px;
  overflow-y: auto;
  box-sizing: border-box;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
  padding: 5px;
`;

export const SongCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
  border-radius: 80px;
  position: relative;
  z-index: 0;
  box-shadow: 0 0 5px 0 ${({ theme }) => theme.colors.gray300};
`;

export const SongRank = styled.div`
  background: ${({ theme }) => theme.colors.indigo700};
  color: white;
  border-radius: 40px;
  ${({ theme }) => theme.fonts.Caption}
  text-align: center;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SongContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
  flex: 1;
`;

export const SongTitle = styled.p`
  margin: 0;
  ${({ theme }) => theme.fonts.Body3}
  white-space: normal;
`;
