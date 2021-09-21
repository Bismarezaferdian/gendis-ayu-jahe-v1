import React, { useState } from "react";
import Bounce from "react-reveal/Bounce";
import About from "../../images/about-jahe.png";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  ImgWrap,
  BtnWrap,
  ArrowForward,
  ArrowRight,
  BtnLink,
} from "./InfoElement";

const AboutPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <InfoContainer id="about" lightBg={true}>
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1>
              <Bounce bottom delay={900}>
                <TextWrapper>
                  <TopLine>what about gendis ayu jahe</TopLine>
                  <Heading lightText={false}>
                    serbuk minuman terbuat dari jahe merah asli dan
                    rempah-rempah{" "}
                  </Heading>
                  <Subtitle darkText={true}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat numquam non totam dolor id itaque.
                  </Subtitle>
                  <BtnWrap>
                    <BtnLink
                      onMouseEnter={onHover}
                      onMouseLeave={onHover}
                      to="/signUp"
                    >
                      Our story
                      {hover ? <ArrowForward /> : <ArrowRight />}
                    </BtnLink>
                  </BtnWrap>
                </TextWrapper>
              </Bounce>
            </Column1>
            <Column2>
              <ImgWrap>
                <Bounce bottom delay={200}>
                  <Img src={About} />
                </Bounce>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutPage;
