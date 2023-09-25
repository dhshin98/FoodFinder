import React, { useState } from "react";
import styled from "styled-components";

export default function Slider() {
  const [sliderValue, setSliderValue] = useState(0);
  const splitValues = [1, 25, 50, 75, 100];

  return (
    <div>
      <MainSlider>
        <Input
          type="range"
          style={{ color: `var(--grey-background)` }}
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
          min="0"
          max="100"
          step="1"
        />

        {splitValues.map((posValue, index) => {
          return (
            <>
              <Circle position={posValue} currentValue={sliderValue} />
              <RangeButton
                position={posValue}
                onClick={(e) => setSliderValue(posValue)}
              >
                {posValue}%
              </RangeButton>
            </>
          );
        })}
      </MainSlider>
    </div>
  );
}

const MainSlider = styled.div`
  width: 60vw;
  /* margin: 10px 15%; */
  position: relative;
  height: 6px;
  background: var(--grey-background);
  border-radius: 1px;
`;
const Input = styled.input`
  position: absolute;
  height: 5px;
  width: 100%;
  z-index: 1;
  background: linear-gradient(
    90deg,
    var(--green-mint) 0%,
    var(--green-mint) ${(props) => props.value}%,
    var(--grey-background) ${(props) => props.value}%
  );

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: var(--green-mint);
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 4px solid var(--white);
    box-shadow: 0px 1px 3px gray;
  }
`;
const Circle = styled.div`
  line-height: 3px;
  position: absolute;
  left: calc(${(props) => props.position}%);
  top: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) =>
    props.position > props.currentValue
      ? "var(--grey-background)"
      : "var(--green-mint)"};
`;
const RangeButton = styled.button`
  position: absolute;
  width: 100%;
  left: calc(${(props) => props.position}% - 1.2rem);
  margin: 30px 0;
  padding: 3px 0;
  background: var(--grey-background);
  border-radius: 2em;
  border: none;
  width: 2.4rem;
  text-align: center;
  color: var(--grey-lighter);
  font-size: 0.7em;
  font-weight: var(--bold);
  cursor: pointer;

  :hover {
    background: var(--green-mint);
    color: var(--white);
  }
`;
