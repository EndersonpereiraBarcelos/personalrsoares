import styled from "styled-components";
import Image from "next/image";
import Principal from "../public/personalrsoares/Patriocinio.png";

export default function FotoPrincipal() {
  return (
    <div>
      <Image src={Principal} height={480} width={400} />
    </div>
  );
}
