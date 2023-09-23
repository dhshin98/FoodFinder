import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled from "styled-components";

const NewBusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  width: 100vw;
  height: 70vh;
`;

const NewBusiness = () => {
  const navigate = useNavigate();
  return (
    <NewBusinessContainer>
      <div>
        <Custombutton
          name={"체크리스트로 가상창업"}
          buttonSize="large"
          backgroundColor="#1450A3"
          textColor="white"
        />
      </div>
      <div>
        <Custombutton
          name={"지도기반 가상창업"}
          buttonSize="large"
          backgroundColor="#279EFF"
          textColor="white"
        />
      </div>
      <div onClick={() => navigate("/main")}>
        <Custombutton
          name={"뒤로가기"}
          buttonSize="large"
          backgroundColor="#191D88"
          textColor="white"
        />
      </div>
    </NewBusinessContainer>
  );
};
export default NewBusiness;
