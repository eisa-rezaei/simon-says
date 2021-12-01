import styled from "styled-components";

export const StSingleColor = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.color};
  display: grid;
  align-content: center;
  justify-items: center;
  border: 2px solid #fff;
  :hover {
    background-color: ${(props) => `${props.color}e0`};
  }
`;
