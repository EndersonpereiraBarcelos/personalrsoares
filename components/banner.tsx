import styled from "styled-components";
import Image from "next/image";
import FotoBanner from "../public/personalrsoares/banner01.png";

const Ajuste = styled.h3`
  padding: 0;
  margin: 0;
  text-align: center;
  background: peachpuff;
`;

export default function banner() {
  return (
    <div>
      <Ajuste>
        <Image src={FotoBanner} />
      </Ajuste>
    </div>
  );
}
