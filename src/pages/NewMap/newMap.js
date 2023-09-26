import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Custombutton from "../../component/custombutton/custombutton";
import styled from "styled-components";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import useDidMountEffect from "../../component/didmount/usedidmounteffect";

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75vh;
  align-items: center;
  margin: 1rem;
`;

const CustomButtonWithMargin = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
const CustomH5 = styled.h5`
  margin: 1rem;
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

  const [map, setMap] = useState(null); // null로 초기화
  const [marker, setMarker] = useState(null); // null로 초기화

  // 1) 카카오맵 불러오기
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.5512304, 126.93927431),
        level: 3,
      };

      setMap(new window.kakao.maps.Map(container, options));
      setMarker(new window.kakao.maps.Marker());
    });
  }, []);

  // 2) 최초 렌더링 시에는 제외하고 map이 변경되면 실행
  useDidMountEffect(() => {
    if (map) {
      window.kakao.maps.event.addListener(map, "click", function (mouseEvent) {
        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.coord2Address(
          mouseEvent.latLng.getLng(),
          mouseEvent.latLng.getLat(),
          (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              var addr = !!result[0].road_address
                ? result[0].road_address.address_name
                : result[0].address.address_name;

              // 클릭한 위치 주소를 가져온다.
              console.log(addr);
              setAddress(addr);
              console.log(address);

              // 기존 마커를 제거하고 새로운 마커를 넣는다.
              if (marker) {
                marker.setMap(null);
              }
              // 마커를 클릭한 위치에 표시합니다
              const newMarker = new window.kakao.maps.Marker({
                position: mouseEvent.latLng,
              });
              newMarker.setMap(map);
              setMarker(newMarker);
            }
          }
        );
      });
    }
  }, [map, marker]);

  return (
    <MapContainer>
      <div id="map">
        <Map
          center={{ lat: 37.5512304, lng: 126.93927431 }} // 지도의 중심 좌표
          style={{ width: "80vw", height: "60vh" }} // 지도 크기
          level={3} // 지도 확대 레벨
        >
          <MapMarker
            position={{ lat: 37.5486382, lng: 126.9394977 }}
          ></MapMarker>
        </Map>
      </div>
      <CustomH5>
        지도에 창업하고 싶은 위치를 누르고 제출 버튼을 누르세요
      </CustomH5>
      <h4>{address}</h4>

      <CustomButtonWithMargin onClick={() => navigate("/checklist")}>
        <Custombutton
          name={"제출"}
          buttonSize="small"
          backgroundColor="#FFB000"
          textColor="white"
        />
      </CustomButtonWithMargin>
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
