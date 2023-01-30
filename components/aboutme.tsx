// import Image from "next/image";
// import Foto1 from "../public/personalrsoares/ftabout.jpeg";
// import Button from "./button";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// function ContainerExample() {
//   return (
//     <Container>
//       <Row>
//         <Col fluid="xxl">
//           {" "}
//           <Image src={Foto1} height={460} width={330} />{" "}
//         </Col>
//         <Col fluid="xxl">
//           {" "}
//           <h2>Sobre mim</h2>
//           <p>
//             Olá, sou Ricardo Sales Soares, professor de educação física na área
//             de bacharel, atuo há mais de 5 anos com treinamento de musculação e
//             outros, ajudo pessoas quaisquer a conquistarem seus objetivos
//             através do treinamento, isso inclui, saúde e bem estar, estética e
//             atletas para competições, sou especialista no trabalho de
//             emagrecimento e hipertrofia.
//           </p>
//           <Button />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ContainerExample;

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";

// import Image from "next/image";
// import Foto1 from "../public/personalrsoares/ftabout.png";
// import Button from "./button";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "ffff" : " #434343",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// export default function ColumnsGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2} columns={16}>
//         <Grid item xs={8}>
//           <Item>
//             <Image src={Foto1} height={460} width={330} />
//           </Item>
//         </Grid>
//         <Grid item xs={8}>
//           <Item>
//             <h2>Sobre mim</h2>
//             <p>
//               Olá, sou Ricardo Sales Soares, professor de educação física na
//               área de bacharel, atuo há mais de 5 anos com treinamento de
//               musculação e outros, ajudo pessoas quaisquer a conquistarem seus
//               objetivos através do treinamento, isso inclui, saúde e bem estar,
//               estética e atletas para competições, sou especialista no trabalho
//               de emagrecimento e hipertrofia.
//             </p>
//             <Button />
//           </Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Image from "next/image";
import Foto1 from "../public/personalrsoares/ftabout.png";
import Button from "./button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#585858",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
            {" "}
            <Image src={Foto1} height={460} width={330} alt="foto" />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            {" "}
            <h2>Sobre mim</h2>
            <p>
              OOlá, sou Ricardo Sales Soares, professor de educação física na
              área de bacharel, atuo há mais de 5 anos com treinamento de
              musculação e outros, ajudo pessoas quaisquer a conquistarem seus
              objetivos através do treinamento, isso inclui, saúde e bem estar,
              estética e atletas para competições, sou especialista no trabalho
              de emagrecimento e hipertrofia, como também auto performance.
            </p>
            <Button />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
