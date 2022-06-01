import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 5px solid #0099ff75;
  border-top: 5px solid #0099ff;
  
  animation: ${spin} 1s linear infinite;
`;

export const SugesstionsList = styled.ul`
  list-style: none;
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const SugestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;