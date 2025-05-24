import styled from "styled-components";

export const Container = styled.div`
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  max-width: 430px;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  background-color: rgba(4, 0, 34, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(8px);
`;
