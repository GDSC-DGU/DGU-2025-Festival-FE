import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  padding-top: 54px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  gap: 16px;
`;

export const ToolbarRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// export const WaitingCheckButton = styled.button`
//   position: relative;
//   background-color: white;
//   color: #575bdf;
//   border: 2px solid #575bdf;
//   border-radius: 32px;
//   padding: 10px 20px;
//   font-weight: 600;
//   font-size: 16px;
//   cursor: pointer;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   &:hover {
//     opacity: 0.95;
//   }
// `;

export const Badge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e94a85;
  color: white;
  font-size: 12px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoothListWrapper = styled.div`
  position: relative;
  max-height: 320px;
  overflow-y: auto;
  padding: 15px 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* 
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  ); */

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 20px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, white, transparent);
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, white, transparent);
  }
`;

export const Update = styled.div`
  /* margin-top: 16px; */
  padding: 16px;
  background-color: white;
  color: ${({ theme }) => theme.colors.gray500};
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
`;
