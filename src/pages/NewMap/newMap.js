import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled from "styled-components";

import { Map } from "react-kakao-maps-sdk";

const NewMap = () => {
  const navigate = useNavigate();
  //   var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  //   var options = {
  //     //지도를 생성할 때 필요한 기본 옵션
  //     center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  //     level: 3, //지도의 레벨(확대, 축소 정도)
  //   };

  //   var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  return (
    <div>
      <div id="map">
        <Map
          center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심 좌표
          style={{ width: "800px", height: "600px" }} // 지도 크기
          level={3} // 지도 확대 레벨
        ></Map>
      </div>
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
