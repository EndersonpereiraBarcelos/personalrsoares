import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Image from "next/image";
import Foto1 from "../public/personalrsoares/ftabout.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#0d1f0a",
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
              Olá, sou Ricardo Sales Soares, professor de educação física na
              área de bacharel, atuo há mais de 5 anos com treinamento de
              musculação e outros, ajudo pessoas quaisquer a conquistarem seus
              objetivos através do treinamento, isso inclui, saúde e bem estar,
              estética e atletas para competições, sou especialista no trabalho
              de emagrecimento e hipertrofia, como também auto performance.
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
