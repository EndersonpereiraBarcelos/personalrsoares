import { useState } from "react";
import styled from "styled-components";

const DecoratedButton = styled.button`
  text-decoration: none;
  padding: 0.3rem;
  color: gray;
  cursor: pointer;
  border-radius: 6px;
  border-width: 2px;
  border-style: solid;
  
`;

export default function Button() {
  return (
    <div>
      <DecoratedButton>
        <a
          href="https://www.mfitpersonal.com.br/index?share=MTU4MTAyLzAvOS8w"
          target="next"
        >
          Compre agora
        </a>
      </DecoratedButton>
    </div>
  );
}
