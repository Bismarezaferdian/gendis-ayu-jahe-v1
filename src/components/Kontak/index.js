import React, { useState } from "react";
import Bounce from "react-reveal/Bounce";
import About from "../../images/signin.svg";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Img,
  ImgWrap,
  Location,
  KontenWrapp,
  Call,
  Mail,
  SocialIcons,
  SocialIconLinks,
  TitleKontak,
} from "./KontakElement";

const Kontak = () => {
  return (
    <>
      <InfoContainer id="contact" lightBg={true}>
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1>
              <Bounce top delay={600}>
                <TextWrapper>
                  <TitleKontak>Information contact & office</TitleKontak>
                  <KontenWrapp>
                    <Location />
                    Kartaraharja RK32/RT8,Kec.Tulang Bawang Udik, Kab.Tulang
                    Bawang Barat, Lampung INDONESIA
                  </KontenWrapp>
                  <KontenWrapp>
                    <Call />
                    +62813 1063 7181
                  </KontenWrapp>
                  <KontenWrapp>
                    <Mail />
                    gendisayujahe@gmail.com
                  </KontenWrapp>
                  <SocialIcons>
                    <SocialIconLinks
                      href="https://www.instagram.com/gendisayujahe/"
                      target="_blank"
                      arial-label="Instagram"
                    >
                      <FaInstagram />
                    </SocialIconLinks>
                    <SocialIconLinks
                      href="https://www.facebook.com/gendis.jahe"
                      target="Direct Instagram"
                      arial-label="Facebook"
                    >
                      <FaFacebookF />
                    </SocialIconLinks>
                    <SocialIconLinks
                      href="https://www.youtube.com/channel/UCVA4Jx6aDuxXQeqqko7_IZA"
                      target="_blank"
                      arial-label="Youtube"
                    >
                      <FaYoutube />
                    </SocialIconLinks>
                  </SocialIcons>
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

export default Kontak;
