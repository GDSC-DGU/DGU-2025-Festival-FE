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

export const ModalWrapper = styled.div`
  background: white;
  border-radius: 10px;
  padding: 24px;
  max-width: 360px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-height: 90vh;
  overflow-y: auto;
  box-sizing: border-box;
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
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 8px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  gap: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.gray200};
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DayTag = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${({ theme }) => theme.colors.indigo900};
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 20px;
  z-index: 1;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Head1}
`;

export const SubTitle = styled.h3`
  ${({ theme }) => theme.fonts.Body1B};
  color: ${({ theme }) => theme.colors.gray600};
`;

export const HashtagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Hashtag = styled.span`
  background-color: #e6f2ff;
  color: #148aff;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
`;

export const Ment = styled.p`
  ${({ theme }) => theme.fonts.Button1};
  color: ${({ theme }) => theme.colors.gray700};
`;

export const HashTagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
