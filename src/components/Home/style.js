import styled from "styled-components";

export const StHomeContainer = styled.article`
  width: 100vw;
  min-height: 100vh;
  gap: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);

  & p {
    padding: 10px;
    border-radius: 5px;
    color: #f33;
    transition: all 0.3s ease;
    background-color: #22222290;
    opacity: ${(props) => (props.paragraphFade ? 1 : 0)};
  }
`;

export const StColorsContainer = styled.section`
  width: 310px;
  min-height: 310px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  transition: all 0.3s linear;
  :hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const StColorsStartBtn = styled.button`
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  background-color: #5b00af;
  color: #fff;
  border: 5px solid #fff;
`;
