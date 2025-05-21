import styled from "styled-components";

export const BottomNav = styled.nav`
  max-width: 430px;
  width: 100%;
  height: 56px;
  background-color: white;
  box-shadow: 0 -2px 8px rgba(79, 70, 229, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  position: fixed;
  bottom: 0;
  ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      flex: 1;
      text-align: center;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        text-decoration: none;
        color: var(--gray-400);

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
      }
    }
  }
`;
