import { useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import logoImage from "../../image/initial.png";
import { useEffect } from "react";
const ImageFull = styled.img`
  width: 100vw;
  height: 100vh;
  cursor: pointer;
`;

const LogoPage = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/main");
  };
  useEffect(() => {
    setTimeout(() => {
      navigate("/main");
    }, 3000);
  }, []);

  return (
    <div onClick={handleImageClick}>
      <ImageFull src={logoImage} />
    </div>
  );
};

export default LogoPage;
