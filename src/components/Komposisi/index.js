import React from "react";
import { KomposisiData } from "./Data";
import {
  KomposisiContainer,
  KomposisiWrapp,
  Title,
  KomposisiCard,
  TitleKomposisi,
  DescKomposisi,
} from "./elementKomposisiCopy";

function Komposisi() {
  return (
    <KomposisiContainer>
      {/* <Title>Komposisi</Title> */}
      <KomposisiWrapp>
        {KomposisiData.map((item, index) => (
          <KomposisiCard key={index}>
            <TitleKomposisi>{item.title}</TitleKomposisi>
            <DescKomposisi>{item.desc}</DescKomposisi>
          </KomposisiCard>
        ))}
      </KomposisiWrapp>
    </KomposisiContainer>
  );
}

export default Komposisi;
