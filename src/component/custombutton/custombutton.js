import "./custombutton.element.css";
import styled from "styled-components";
const Custombutton = ({
  type,
  name,
  buttonSize,
  backgroundColor,
  textColor,
}) => {
  return (
    <button
      className={(type === 1 ? `primary` : `secondary`) + ` btnContainer`}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        //버튼 크기 선택 옵션
        width: buttonSize === "small" ? "5rem" : "15rem",
        height: buttonSize === "small" ? "5rem" : "5rem",
      }}
    >
      {name}
    </button>
  );
};

export default Custombutton;
