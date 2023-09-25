import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled, { withTheme } from "styled-components";
import ReactWordcloud from "react-wordcloud";
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
  Scatter,
  Cell,
  BarChart,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const User = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

// userStatisticsContainer 스타일드 컴포넌트
const UserStatisticsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 400px;
`;

// userStatisticsItem 스타일드 컴포넌트
const UserStatisticsItem = styled.div`
  width: 100%;
`;

// userBtn 스타일드 컴포넌트
// const UserBtn = styled.div`
//   position: fixed;
//   bottom: 10%;
// `;

const Userpage = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState("");

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
      text: "배달 가능",
      value: 65,
    },
    {
      text: "야외 테라스",
      value: 75,
    },
    {
      text: "24시 영업",
      value: 70,
    },
    {
      text: "분위기 좋은",
      value: 68,
    },
    {
      text: "해장",
      value: 100,
    },
    {
      text: "친절한 서비스",
      value: 72,
    },
    {
      text: "편한 주차",
      value: 60,
    },
    {
      text: "소주 3차",
      value: 80,
    },

    {
      text: "야식 메뉴",
      value: 65,
    },
    {
      text: "혼밥 추천",
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
      text: "고기 풍부",
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
      text: "순대국",
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
  ];

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
      <h2> 💸 매출액 변화</h2>
      <UserStatisticsContainer>
        <UserStatisticsItem>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={400}
              height={300}
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
      <h2>매출등급 변화</h2>
      <UserStatisticsContainer>
        <UserStatisticsItem>
          <BarChart
            width={400}
            height={300}
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
        </UserStatisticsItem>
      </UserStatisticsContainer>
      <h2>고객리뷰</h2>
      <UserStatisticsContainer>
        <UserStatisticsItem>
          <ReactWordcloud words={words} />
        </UserStatisticsItem>
      </UserStatisticsContainer>
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
