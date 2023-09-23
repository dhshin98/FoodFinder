import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled from "styled-components";
const NewMap = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/newBusiness")}>
        <Custombutton
          name={"제출"}
          buttonSize="small"
          backgroundColor="#FFB000"
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
    </div>
  );
};
export default NewMap;
