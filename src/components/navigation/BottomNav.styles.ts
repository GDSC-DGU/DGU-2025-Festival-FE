import styled from "styled-components";

export const BottomNav = styled.nav`
  max-width: 430px;
  width: 100%;
  height: calc(56px + env(safe-area-inset-bottom, 0px));
  padding-bottom: env(safe-area-inset-bottom, 0px); /* iOS 노치 대응 */
  background-color: white;
  box-shadow: 0 -2px 8px rgba(79, 70, 229, 0.1);
  ${({ theme }) => theme.fonts.Body3};

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  ul {
    display: flex;
    width: 100%;
    height: 56px; 
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      a,
      button {
        all: unset;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        cursor: pointer;
        color: var(--gray-400);
        text-decoration: none;

        &.active,
        .active {
          background: ${({ theme }) => theme.gradients.purple};
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        img {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        span {
          font-size: 12px;
        }
      }
    }
  }
`;
