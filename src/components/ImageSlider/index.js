import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { DataSlider } from "./Data";
import {
  SliderContainer,
  SliderWrapp,
  SlideKonten,
  SlideImage,
} from "./SliderElement";

function Slider() {
  return (
    <SliderContainer>
      <SliderWrapp>
        <Slide easing="ease">
          {DataSlider.map((item, index) => (
            <SlideKonten key={index}>
              <SlideImage src={item.image} alt={item.alt} />
            </SlideKonten>
          ))}
        </Slide>
      </SliderWrapp>
    </SliderContainer>
  );
}

export default Slider;
