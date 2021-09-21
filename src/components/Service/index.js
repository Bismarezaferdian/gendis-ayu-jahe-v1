import React from "react";
import RedCover from "../../images/kemasan-merah.png";
import GrenCover from "../../images/kemasan-hijau.png";
import Bounce from "react-reveal/Bounce";

import {
  ServiceContainer,
  ServiceWrapp,
  ServiceCard,
  ServiceH1,
  ServiceIcon,
  ServiceTitle,
} from "./ServiceElement";

const service = () => {
  return (
    <ServiceContainer bgColor={false} id="product">
      <ServiceH1>Products</ServiceH1>
      <ServiceWrapp>
        <Bounce left delay={900}>
          <ServiceCard>
            <ServiceIcon src={RedCover} />
            <ServiceTitle>Gula Merah</ServiceTitle>
          </ServiceCard>
        </Bounce>
        <Bounce left delay={600}>
          <ServiceCard>
            <ServiceIcon src={GrenCover} />
            <ServiceTitle>Gula Aren</ServiceTitle>
          </ServiceCard>
        </Bounce>
      </ServiceWrapp>
    </ServiceContainer>
  );
};

export default service;
