import React from "react";
import styled from "styled-components";
import { DataGallery } from "./Data";
import { Image } from "react-bootstrap";
const GalleriSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  width: 100%;
  padding: 80px 0;
`;

const GalleriTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;
  color: #000;

  @media screen and (max-width: 660px) {
    font-size: 2rem;
    margin-top: 100px;
  }
`;

const GalleryWrapp = styled.div`
  --webkit-column-count: 3;
  --moz-column-count: 3;
  column-count: 3;
  --webkit-column-width: 33%;
  --moz-column-width: 33%--moz-column-count;
  column-width: 33%;
  padding: 0 80px;

  @media screen and (max-width: 660px) {
    --webkit-column-count: 2;
    --moz-column-count: 2;
    column-count: 2;
    padding: 0 20px;
  }
`;

const ImageWrapp = styled.div`
  --webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
`;

const Gallery = () => {
  return (
    <GalleriSection id="gallery">
      <GalleriTitle>Gallery</GalleriTitle>
      <GalleryWrapp>
        {DataGallery.map((item) => (
          <ImageWrapp key={item.id}>
            <Image src={item.image} atl={item.alt} w-100 fluid />
          </ImageWrapp>
        ))}
      </GalleryWrapp>
    </GalleriSection>
  );
};

export default Gallery;
