import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled from "styled-components";
import UserTab from "../../component/usertab/usertab";

const User = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

const Userpage = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState("");
  const tempLogin = () => {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        id: "dong98",
        name: "빅콘테스트",
        age: 26,
        email: "shindh98@naver.com",
      })
    );
  };

  useEffect(() => {
    tempLogin();
  }, []);

  useEffect(() => {
    const getUserData = () => {
      setUserData(JSON.parse(localStorage.getItem("userData")));
    };
    getUserData();
  }, []);

  return (
    <User className="userContainer">
      <h2 className="userTitle">
        <b>{userData.name}</b>님 안녕하세요!
      </h2>
      <UserTab />

      <div className="userBtn" onClick={() => navigate("/main")}>
        <Custombutton
          buttonSize="small"
          name={"뒤로가기"}
          backgroundColor="#191D88"
          textColor="white"
        />
      </div>
    </User>
  );
};
export default Userpage;
