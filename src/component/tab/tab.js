import React, { useState } from "react";
import styled from "styled-components";

export default function Tab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };
  const tabContArr = [
    {
      index: 0,
      tabTitle: "교통량",
      tabCont: "⏰ 월별, 시간별 교통량 분석",
    },
    {
      index: 1,
      tabTitle: "인구 정보",
      tabCont: "👥 인구 정보",
    },
    {
      index: 2,
      tabTitle: "폐업정보",
      tabCont: "🏚️ 이 위치의 최근 폐업정보 제공",
    },
  ];

  return (
    <div>
      <TabSetting>
        <TabList>
          {tabContArr.map((section, index) => {
            return (
              <TabItem
                key={index}
                isActive={index === activeIndex}
                onClick={() => tabClickHandler(index)}
              >
                {section.tabTitle}
              </TabItem>
            );
          })}
          <ClickSlideWrapper>
            <ClickSlide activeIndex={activeIndex}></ClickSlide>
          </ClickSlideWrapper>
        </TabList>

        <div>{tabContArr[activeIndex].tabCont}</div>
      </TabSetting>
    </div>
  );
}

const TabSetting = styled.div`
  text-align: center;
  /* padding: 0 40px 40px 40px;
  margin: 40px 30% 40px 30%; */
  width: 90vw;
  height: 60vh;
  border: 1px solid #a5acb1;
  border-radius: 5px;
  background: #fff;
  margin: 1rem;
`;

const TabList = styled.ul`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
`;

const TabItem = styled.p`
  flex: 1;
  padding: 12px 0 0 0;
  text-align: center;
  cursor: pointer;
  transition: opacity 180ms ease-out;
  outline: 0;
  font-weight: var(--bold-900);
  color: ${(props) =>
    props.isActive ? "var(--black)" : "var(--grey-lighter)"};
`;

const ClickSlideWrapper = styled.div`
  width: 100%;
  height: 2px;
  background: var(--grey-light);
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

const ClickSlide = styled.div`
  width: 33%;
  position: relative;
  bottom: 0;
  height: 2px;
  background-color: var(--green-mint);
  left: ${(props) => props.activeIndex * 33}%;
  transition: 800ms cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 2;
`;
