import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled from "styled-components";
import Tab from "../../component/tab/tab";

const AnalyzeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 85vh;
  position: absolute;
`;

const Analyze = () => {
  const navigate = useNavigate();
  return (
    <AnalyzeContainer>
      <h2>서대문구 신촌동은 "대학상권"입니다</h2>
      <Tab />
      <div onClick={() => navigate("/recommend")}>
        <Custombutton
          name={"추천장소 GO!"}
          buttonSize="small"
          backgroundColor="#1450A3"
          textColor="white"
        />
      </div>
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
