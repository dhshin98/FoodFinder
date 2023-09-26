import React, { useState } from "react";
import styled from "styled-components";
import {
  ComposedChart,
  Line,
  LineChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  Scatter,
  Cell,
  BarChart,
  PieChart,
  Pie,
  Sector,
} from "recharts";
import { PureComponent } from "react";
import image1 from "../../image/num1.jpeg";
import image2 from "../../image/num2.jpeg";
import Donut from "../donut/donut";

// import image1 from "../../image/num1.jpeg";
// import image2 from "../../image/num2.jpeg";
// import image from "../../image/search.svg";
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
      tabCont: "👥  남녀 & 나이별 비율",
    },
    {
      index: 2,
      tabTitle: "폐업정보",
      tabCont: "🏚️ 이 위치의 최근 폐업정보",
    },
    {
      index: 3,
      tabTitle: "업종분석",
      tabCont: "📊 이 상권의 업종분석",
    },
  ];

  const data = [
    {
      time: 0,
      버스: 1.0,
      지하철: 0.3,
      택시: 3.0,
    },
    {
      time: 2,
      버스: 1.1,
      지하철: 0,
      택시: 2.1,
    },
    {
      time: 4,
      버스: 0.2,
      지하철: 0,
      택시: 0.6,
    },
    {
      time: 6,
      버스: 1.2,
      지하철: 1.3,
      택시: 1.0,
    },
    {
      time: 8,
      버스: 4.3,
      지하철: 2.4,
      택시: 3.2,
    },
    {
      time: 10,
      버스: 3.3,
      지하철: 3.5,
      택시: 3.1,
    },
    {
      time: 12,
      버스: 4.6,
      지하철: 4.3,
      택시: 4.1,
    },
    {
      time: 14,
      버스: 3.2,
      지하철: 3.4,
      택시: 4.4,
    },
    {
      time: 16,
      버스: 4.8,
      지하철: 5.5,
      택시: 5.1,
    },
    {
      time: 17,
      버스: 5.9,
      지하철: 8.1,
      택시: 4.9,
    },
    {
      time: 18,
      버스: 7.3,
      지하철: 8.3,
      택시: 4.5,
    },
    {
      time: 19,
      버스: 7.5,
      지하철: 7.5,
      택시: 4.7,
    },
    {
      time: 20,
      버스: 6.6,
      지하철: 7.2,
      택시: 5.1,
    },
    {
      time: 22,
      버스: 4.5,
      지하철: 6.0,
      택시: 4.4,
    },
    {
      time: 24,
      버스: 4.4,
      지하철: 3.2,
      택시: 4.9,
    },
  ];

  const population = [
    { name: "남자", value: 7627 },
    { name: "여자", value: 8528 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const COLORS2 = [
    "#f7fbff",
    "#deebf7",
    "#c6dbef",
    " #9ecae1 ",
    "#6baed6",
    "#4292c6",
    " #2171b5",
    "#08519c",
    "#08306b",
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const data02 = [
    { name: "10대", value: 2314 },
    { name: "20대", value: 4231 },
    { name: "30대", value: 3421 },
    { name: "40대", value: 2248 },
    { name: "50대", value: 3241 },
    { name: "60대", value: 2134 },
    { name: "70대", value: 1441 },
    { name: "80 이상", value: 1843 },
  ];

  const data03 = [
    { name: "한식", value: 76, color04: "#ff0000" },
    { name: "치킨", value: 32, color04: "#ff0000" },
    { name: "기타 외식", value: 20, color04: "#ff0000" },
    { name: "제과제빵", value: 34, color04: "#ff0000" },
    { name: "패스트푸드", value: 40, color04: "#ff0000" },
    { name: "피자", value: 35, color04: "#ff0000" },
    { name: "커피", value: 60, color04: "#ff0000" },
    { name: "아이스크림/빙수", value: 15, color04: "#ff0000" },
    { name: "기타 외국식", value: 25, color04: "#ff0000" },
    { name: "중식", value: 20, color04: "#ff0000" },
    { name: "분식", value: 50, color04: "#ff0000" },
    { name: "주점", value: 80, color04: "#ff0000" },
    { name: "일식", value: 20, color04: "#ff0000" },
    { name: "서양식", value: 30, color04: "#ff0000" },
    { name: "음료(커피 외)", value: 20, color04: "#ff0000" },
  ];

  const cx = 150;
  const cy = 200;
  const iR = 50;
  const oR = 100;
  const value = 50;

  const needle = (value, data, cx, cy, iR, oR, color04) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle cx={x0} cy={y0} r={r} fill={color04} stroke="none" />,
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="#none"
        fill={color04}
      />,
    ];
  };

  const PopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
  `;

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
            <PopContainer>
              <ResponsiveContainer width={350} height={350}>
                <LineChart width={400} height={300} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" padding={{ left: 30, right: 30 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="지하철"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="버스" stroke="#00C49F" />
                  <Line type="monotone" dataKey="택시" stroke="#0088FE" />
                </LineChart>
              </ResponsiveContainer>
            </PopContainer>
          )}
          {activeIndex === 1 && (
            // 인구 정보에 대한 리액트 차트를 렌더링하는 코드
            // <PopContainer>
            <ResponsiveContainer width={350} height={350}>
              <PieChart width={500} height={500}>
                <Pie
                  data={population}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Pie
                  data={data02}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={90}
                  outerRadius={110}
                  fill="#82ca9d"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            // </PopContainer>
          )}
          {activeIndex === 2 && (
            // 폐업정보에 대한 리액트 차트를 렌더링하는 코드
            <div>
              <ItemCard>
                {/* <img src="../../image/num1.jpeg" width="100" height="130" /> */}
                {/* <img src="../../image/코다차야.jpeg" alt="코다차야" /> */}
                <ImageItem src={image2} />
                <ItemIfo>
                  <h4>상업명: 코다차야</h4>
                  <h5>폐업일 : 2023년 03월 19일 </h5>
                  <h5> 업종분류 : 주점</h5>
                  <h5>프렌차이즈 유무: 예</h5>
                  <h5>영업기간: 1년 2개월</h5>
                </ItemIfo>
              </ItemCard>

              <ItemCard>
                {/* <img src="../../image/num2.jpeg" width="100" height="130" /> */}
                <ImageItem src={image1} />
                <ItemIfo>
                  <h4>상업명: 빠빠빠치킨</h4>
                  <h5>폐업일 : 2020년 08월 04일 </h5>
                  <h5> 업종분류 : 치킨 </h5>
                  <h5>프렌차이즈 유무: 아니오</h5>
                  <h5>영업기간: 3년 8개월</h5>
                </ItemIfo>
              </ItemCard>
            </div>
          )}{" "}
          {activeIndex === 3 && (
            <div>
              {" "}
              <PopContainer>
                <ResponsiveContainer width={350} height={350}>
                  <PieChart width={400} height={400}>
                    <Pie
                      dataKey="value"
                      startAngle={0}
                      endAngle={360}
                      data={data03}
                      cx={cx}
                      cy={cy}
                      innerRadius={iR}
                      outerRadius={oR}
                      fill="#8884d8"
                      stroke="none"
                    >
                      {data03.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS2[index % COLORS2.length]}
                        />
                      ))}
                    </Pie>
                    {needle(value, data03, cx, cy, iR, oR, "#d0d000")}
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </PopContainer>
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
  width: 25%;
  position: relative;
  bottom: 0;
  height: 2px;
  background-color: var(--green-mint);
  left: ${(props) => props.activeIndex * 25}%;
  transition: 800ms cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 2;
`;

const ImageItem = styled.img`
  width: 6rem;
  height: 8rem;
  border-radius: 1rem;
`;
const ItemCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
`;
const ItemIfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 0px;
  height: 100%;
`;
