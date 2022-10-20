import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: palevioletred;
  border-color: palevioletred;
  display: inline-block;
  text-decoration: none;
`;

export default function Button() {
  return (
    <div>
      <StyledButton>
        <a
          href="https://www.mfitpersonal.com.br/index?share=MTU4MTAyLzAvOS8w"
          target="next"
        >
          Compre Agora
        </a>
      </StyledButton>
    </div>
  );
}
