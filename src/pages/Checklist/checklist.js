import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled from "styled-components";

const ChecklistContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100vw;
  height: 70vh;
`;
const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
`;
const Answer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  width: 80vw;
`;

const CustomButtonWithMargin = styled(Custombutton)`
  margin-right: 0.3rem;
`;

const Checklist = () => {
  const navigate = useNavigate();
  return (
    <ChecklistContainer>
      <QuestionContainer>
        <div>창업하려고 하는 지역이 어디인가요?(법정동 기준)</div>
      </QuestionContainer>
      <Answer>토글</Answer>
      <QuestionContainer>
        <div>어떤 업종을 창업하고자 하나요?(요식업 업종 선택)</div>
      </QuestionContainer>
      <Answer>토글</Answer>
      <QuestionContainer>
        <div>프렌차이즈인가요?</div>
      </QuestionContainer>
      <ButtonContainer>
        <CustomButtonWithMargin
          name={"◎ 예"}
          buttonSize="small"
          backgroundColor="#FFB000"
          textColor="white"
        />

        <CustomButtonWithMargin
          name={"◎ 아니오"}
          buttonSize="small"
          backgroundColor="#FFB000"
          textColor="white"
        />
      </ButtonContainer>
      <QuestionContainer>
        <div> 권리금과 임대료가 예산을 초과하진 않나요??</div>
      </QuestionContainer>{" "}
      <Answer>토글</Answer>
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
