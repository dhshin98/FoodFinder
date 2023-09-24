import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled, { withTheme } from "styled-components";
import NewBusiness from "../NewBusiness/newBusiness";
const Mainpage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  width: 100vw;
  height: 80vh;
`;

const Main = () => {
  const navigate = useNavigate();

  return (
    <Mainpage>
      <div onClick={() => navigate("/newBusiness")}>
        <Custombutton
          name={"신규 창업자"}
          buttonSize="large"
          backgroundColor="#1450A3"
          textColor="white"
        />
      </div>
      <div onClick={() => navigate("/userpage")}>
        <Custombutton
          name={"기존 자영업자"}
          buttonSize="large"
          backgroundColor="#337CCF"
          textColor="white"
        />
      </div>
    </Mainpage>
  );
};
export default Main;
