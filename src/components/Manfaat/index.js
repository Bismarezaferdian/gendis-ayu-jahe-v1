import React from "react";
import {
  ManfaatContainer,
  ManfaatWrapp,
  ManfaatCard,
  TextDesc,
} from "./ElementManfaat";

function Manfaat() {
  return (
    <ManfaatContainer>
      <ManfaatWrapp>
        <ManfaatCard>
          <TextDesc>Dapat Memperlancar Peredaran darah</TextDesc>
        </ManfaatCard>
        <ManfaatCard>
          <TextDesc>Meredakan Batuk, Flu, Ashma</TextDesc>
        </ManfaatCard>
        <ManfaatCard>
          <TextDesc>Membantu mengobati reumatix & pegal-pegal</TextDesc>
        </ManfaatCard>
      </ManfaatWrapp>
    </ManfaatContainer>
  );
}

export default Manfaat;
