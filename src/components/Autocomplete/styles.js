import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Submit = styled.button`
  display: ${({ toggleSearch }) => (toggleSearch ? "inline-block" : "none")};
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 0.25rem;
  margin: 0 0 0 25px;
  outline: none;
  cursor: pointer;

  &:hover {

  }
`

export const SearchInput = styled.input`
  margin-top: -10px;
  margin-left: 38px;
  margin-right: 10px;
  height: fit-content;
  background-color: transparent;
  color: white;
  border: none;
  border-bottom: 2px white solid;
  outline: none;
`

export const SeacrhLoading = styled.div`
  position: absolute;
  top: 4px;
  right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 5px solid #0099ff75;
  border-top: 5px solid #0099ff;
  
  animation: ${spin} 1s linear infinite;
`

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
  top: 40px;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const SugestionItem = styled.li`
  padding: 10px 10px 10px 35px;
  cursor: pointer;

  &:hover {
    background-color: #3a3a3a;
    text-decoration: underline;
  }
`;