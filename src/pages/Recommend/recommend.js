import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled from "styled-components";

import { Map, MapMarker } from "react-kakao-maps-sdk";

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  align-items: center;
  margin: 1rem;
`;
const CustomH3 = styled.h3`
  margin: 0.5rem;
`;

const Recommend = () => {
  const navigate = useNavigate();
  const { kakao } = window;
  const [address, setAddress] = useState(null); // 현재 좌표의 주소를 저장할 상태
  const getAddress = (lat, lng) => {
    const geocoder = new kakao.maps.services.Geocoder(); // 좌표 -> 주소로 변환해주는 객체
    const coord = new kakao.maps.LatLng(37.5566803113882, 126.904501286522); // 주소로 변환할 좌표 입력
    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setAddress(result[0].address);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  return (
    <MapContainer>
      <div id="map">
        <Map
          center={{ lat: 37.5646993, lng: 126.9394972 }} // 지도의 중심 좌표
          style={{ width: "80vw", height: "60vh" }} // 지도 크기
          level={3} // 지도 확대 레벨
        >
          <MapMarker
            position={{ lat: 37.5646993, lng: 126.9394972 }}
          ></MapMarker>
        </Map>
        <CustomH3>체크리스트를 기반으로 찾은 최적의 장소는</CustomH3>
        <h4>서울특별시 서대문구 연세로 50-1 입니다</h4>
      </div>

      <div onClick={() => navigate("/newBusiness")}>
        <Custombutton
          name={"홈으로"}
          buttonSize="small"
          backgroundColor="#191D88"
          textColor="white"
        />
      </div>
    </MapContainer>
  );
};
export default Recommend;
