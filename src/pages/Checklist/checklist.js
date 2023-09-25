import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled from "styled-components";
import Dropdown from "../../component/dropdown/dropdown";
import Slider from "../../component/slider/slider";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const ChecklistContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100vw;
  height: 70vh;
`;
const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
`;

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  max-height: 200px;
  overflow-y: auto;
  height: 10vh;
`;

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
  cursor: auto;
`;
const StyledModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .myMap {
    border-radius: 20px;
    box-shadow: 1px 1px 10px 1px rgb(71, 181, 255);
  }
`;
const Checklist = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("All");
  const menuItems = ["대흥동", "마포동", "서대문구", "영등포구"];

  const handleSelect = (selectedItem) => {
    // navigate("/newmap");
    // 선택한 항목에 따라 네비게이션을 처리합니다.
    // if (selectedItem === "Option 1") {
    //   // 예시: Option 1을 선택한 경우 "/page1"로 네비게이션
    //   navigate("/page1");
    // }
  };
  const menuList = [
    "한식",
    "치킨",
    "기타 외식",
    "제과제빵",
    "패스트푸드",
    "분식",
    "피자",
    "커피",
    "아이스크림/빙수",
    "기타 외국식",
    "중식",
    "주점",
    "일식",
    "서양식",
    "음료(커피 외)",
  ];

  return (
    <ChecklistContainer>
      <Question>
        <div>창업하려고 하는 지역이 어디인가요?(법정동 기준)</div>
      </Question>
      <Dropdown textOptions={menuItems} onSelect={handleSelect} />
      <Question>
        <div>어떤 업종을 창업하고자 하나요?(요식업 업종 선택)</div>
      </Question>
      <Dropdown textOptions={menuList} />
      <Question>
        <div> 권리금과 임대료가 예산의 몇 % 인가요??</div>
      </Question>{" "}
      <Answer>
        <Slider />
      </Answer>
      <div onClick={() => navigate("/loader")}>
        <Custombutton
          name={"제출하기"}
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
    </ChecklistContainer>
  );
};
export default Checklist;
