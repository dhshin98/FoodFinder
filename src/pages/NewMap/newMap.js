import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled from "styled-components";

import { Map, MapMarker } from "react-kakao-maps-sdk";

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 75vh;
  align-items: center;
`;

const NewMap = () => {
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
          center={{ lat: 37.5512304, lng: 126.93927431 }} // 지도의 중심 좌표
          style={{ width: "80vw", height: "60vh" }} // 지도 크기
          level={3} // 지도 확대 레벨
        >
          <MapMarker
            position={{ lat: 37.5512304, lng: 126.93927431 }}
          ></MapMarker>{" "}
          {/* <button onClick={getAddress}>현재 좌표의 주소 얻기</button> */}
        </Map>

        {/* {address && (
          <div>
            현재 좌표의 주소:
            <p>address_name: {address.address_name}</p>
            <p>region_1depth_name: {address.region_1depth_name}</p>
            <p>region_2depth_name: {address.region_2depth_name}</p>
            <p>region_3depth_name: {address.region_3depth_name}</p>
          </div>
        )} */}
      </div>
      <div onClick={() => navigate("/checklist")}>
        <Custombutton
          name={"제출"}
          buttonSize="small"
          backgroundColor="#FFB000"
          textColor="white"
        />
      </div>
      <div onClick={() => navigate("/checklist")}>
        <Custombutton
          name={"뒤로가기"}
          buttonSize="small"
          backgroundColor="#191D88"
          textColor="white"
        />
      </div>
    </MapContainer>
  );
};
export default NewMap;
