
import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  width: 200px;
  height: 50px;
  border: 1px solid black;
  border-radius: 8px;
  transition: 0.2s background-color ease-in;
  font-size: 16px;

  &:hover {
    background-color: aliceblue;
    border: 1px solid black;
    color: black;
    transition: 0.2s background-color ease-in;
  }
`;

export const Outlinebtn = styled(Button)`
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    
    color: white;
    
  }
`;