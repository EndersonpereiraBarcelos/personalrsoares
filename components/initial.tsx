import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Image from "next/image";
import Button from "./button";
import Foto1 from "../public/personalrsoares/ftinitial.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#0d1f0a" : "#0d1f0a",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
            {" "}
            <Image src={Foto1} height={360} width={300}alt="foto" />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <h2>
              Conquiste uma saúde digna e um físico de qualidade, através
              de um treino feito especificamente para você
            </h2>
            <p>
              Ao longo do meu percurso como profissional da educação física-
              personal trainer, vi muitas pessoas desistirem dos seus objetivos
              e saúde por não terem um treino específico e feito para elas , e
              sempre utilizarem treinos genéricos de academia. Aqui treinando
              comigo lhe darei 100% de garantia, da otimização do seu tempo,
              saúde , estética e qualidade de vida, acessando resultados que
              jamais vistos.
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
