import React from "react";
import styled from "styled-components";

// Styled 버튼 컴포넌트 생성
const StyledButton = styled.button`
  // background: #fbca1f;
  /* font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid white;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em transparent;

  &:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
    cursor: pointer;
  }

  &:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  } */

  margin: 0.2rem;
  position: relative;
  border: none;
  display: inline-block;
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: "TheJamsil5Bold", sans-serif;
  text-decoration: none;
  font-weight: 400;
  transition: 0.25s;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const CustomButton = ({
  type,
  name,
  buttonSize,
  backgroundColor,
  textColor,
}) => {
  return (
    <StyledButton
      className={(type === 1 ? "primary" : "secondary") + " btnContainer"}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        // 버튼 크기 선택 옵션
        width: buttonSize === "small" ? "10rem" : "15rem",
        height: buttonSize === "small" ? "3rem" : "5rem",
        textAlign: "center",
      }}
    >
      {name}
    </StyledButton>
  );
};

export default CustomButton;
