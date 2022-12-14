import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import Initial from "../components/initial";
import Aboutme from "../components/aboutme";
import Companylogo from "../components/companylogo";
import Doubt from "./doubt";
import Plans from "./plans";

const Wrapper = styled.section`
  padding: 0.9em;
  background: #979797;
  align-items: center;
  vertical-align: text-top;
  color: #fffff3;

  h1 {
    text-align: left;
    font-size: 1.2rem;
    vertical-align: text-top;
    word-wrap: normal;
  }
  p {
    text-align: justify;
    font-size: 1.1rem;
  }
`;
const Wrapper2 = styled.section`
  padding: 0.9em;
  background: #979797;
  color: #fffff3;
`;

const Adjustment = styled.div`
  justify-content: right;
  display: inline-block;
`;
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#ffff" }} />
        <Wrapper>
          <Companylogo />
          <Adjustment>
            <Initial />
          </Adjustment>
        </Wrapper>
        <Wrapper2>
          <Aboutme />
        </Wrapper2>
        <Doubt />
        <Plans />
      </Container>
    </React.Fragment>
  );
}
