import React, { useState } from "react";
import styled from "styled-components";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  Cell,
  BarChart,
} from "recharts";

import ReactWordcloud from "react-wordcloud";

export default function UserTab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      index: 0,
      tabTitle: " 매출액 변화",
      tabCont: "💸 월별 매출액, 지출, 이익",
    },
    {
      index: 1,
      tabTitle: "매출등급 변화",
      tabCont: "💰 월별 매출등급 변화",
    },
    {
      index: 2,
      tabTitle: "고객리뷰",
      tabCont: "☁️ 우리 가게 고객 리뷰",
    },
  ];

  // userStatisticsContainer 스타일드 컴포넌트
  const UserStatisticsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 400px;
  `;

  // userStatisticsItem 스타일드 컴포넌트
  const UserStatisticsItem = styled.div`
    width: 100%;
    height: 100%;
    margin: 1rem;
  `;

  const dummyData = [
    {
      date: "2023-04",
      매출액: 6100000,
      지출: 2900000,
      매출등급: 2,
    },
    {
      date: "2023-05",
      매출액: 7100000,
      지출: 4200000,
      매출등급: 3,
    },
    {
      date: "2023-06",
      매출액: 6700000,
      지출: 4300000,
      매출등급: 3,
    },
    {
      date: "2023-07",
      매출액: 5300000,
      지출: 2900000,
      매출등급: 4,
    },
    {
      date: "2023-08",
      매출액: 4700000,
      지출: 2600000,
      매출등급: 3,
    },
    {
      date: "2023-09",
      매출액: 7700000,
      지출: 4300000,
      매출등급: 2,
    },
  ];
  // "이익 " 변수 추가하여 계산
  dummyData.forEach((item) => {
    item.이익 = item.매출액 - item.지출;
  });

  const words = [
    {
      text: "대학생",
      value: 80,
    },
    {
      text: "감자탕",
      value: 110,
    },
    {
      text: "맛집",
      value: 70,
    },
    {
      text: "학교근처",
      value: 60,
    },
    {
      text: "저렴한",
      value: 40,
    },
    {
      text: "배달",
      value: 65,
    },
    {
      text: "가능",
      value: 65,
    },
    {
      text: "야외",
      value: 75,
    },
    {
      text: "24시간",
      value: 70,
    },
    {
      text: "분위기",
      value: 68,
    },
    {
      text: "해장",
      value: 100,
    },
    {
      text: "친절",
      value: 72,
    },
    {
      text: "주차",
      value: 60,
    },
    {
      text: "소주",
      value: 80,
    },
    {
      text: "3차",
      value: 80,
    },
    {
      text: "야식",
      value: 65,
    },
    {
      text: "혼밥",
      value: 58,
    },
    {
      text: "매운 감자탕",
      value: 90,
    },
    {
      text: "깔끔한",
      value: 76,
    },
    {
      text: "고기풍부",
      value: 85,
    },
    {
      text: "3차",
      value: 99,
    },
    {
      text: "맛있는 국물",
      value: 92,
    },
    {
      text: "신선한 재료",
      value: 78,
    },

    {
      text: "가격 오름",
      value: 100,
    },
    {
      text: "대규모",
      value: 82,
    },
    {
      text: "캐치테이블",
      value: 82,
    },
    {
      text: "순대국",
      value: 88,
    },
    {
      text: "웨이팅",
      value: 88,
    },
    {
      text: "맛있는 밥",
      value: 85,
    },

    {
      text: "푸짐한 양",
      value: 90,
    },
    {
      text: "비싸다",
      value: 120,
    },
  ];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
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

        <h2>{tabContArr[activeIndex].tabCont}</h2>
        <div>
          {activeIndex === 0 && (
            <UserStatisticsContainer>
              <UserStatisticsItem>
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    width={400}
                    height={400}
                    data={dummyData}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="date" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="매출액"
                      fill="#8884d8"
                      stroke="#8884d8"
                    />
                    <Line type="monotone" dataKey="지출" stroke="blue" />
                    <Bar dataKey="이익" barSize={20} fill="#1450A3" />
                  </ComposedChart>
                </ResponsiveContainer>
              </UserStatisticsItem>
            </UserStatisticsContainer>
          )}
          {activeIndex === 1 && (
            <UserStatisticsContainer>
              <UserStatisticsItem>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={400}
                    height={400}
                    data={dummyData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Bar
                      dataKey="매출등급"
                      fill="#8884d8"
                      shape={<TriangleBar />}
                      label={{ position: "top" }}
                    >
                      {dummyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </UserStatisticsItem>
            </UserStatisticsContainer>
          )}
          {activeIndex === 2 && (
            // 폐업정보에 대한 리액트 차트를 렌더링하는 코드
            <div>
              <UserStatisticsContainer>
                <UserStatisticsItem>
                  <ResponsiveContainer width="100%" height="100%">
                    <ReactWordcloud words={words} />
                  </ResponsiveContainer>
                </UserStatisticsItem>
              </UserStatisticsContainer>
            </div>
          )}
        </div>
      </TabSetting>
    </div>
  );
}

const TabSetting = styled.div`
  text-align: center;
  /* padding: 0 40px 40px 40px;
  margin: 40px 30% 40px 30%; */
  width: 90vw;
  /* height: 70%; */
  /* height: 60vh; */
  border: 1px solid #a5acb1;
  border-radius: 5px;
  background: #fff;
  margin: 1rem;
`;

const TabList = styled.ul`
  display: flex;
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
