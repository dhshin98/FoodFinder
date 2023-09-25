import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled from "styled-components";
import Tab from "../../component/tab/tab";

const AnalyzeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 75vh;
  align-items: center;
  width: 100vw;
`;

const Analyze = () => {
  const navigate = useNavigate();
  return (
    <AnalyzeContainer>
      <h2>마포구 대흥동은 "대학상권"입니다</h2>
      <Tab />
      <div onClick={() => navigate("/newBusiness")}>
        <Custombutton
          name={"뒤로가기"}
          buttonSize="small"
          backgroundColor="#191D88"
          textColor="white"
        />
      </div>
    </AnalyzeContainer>
  );
};
export default Analyze;
