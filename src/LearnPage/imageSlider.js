import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// const Slide = styled.div``;
function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const leftStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "red",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  return (
    <div style={sliderStyle}>
      <div style={leftStyle}></div>
      <div style={rightStyle}></div>
      <div style={slideStyle}></div>
    </div>
  );
}
export default ImageSlider;
