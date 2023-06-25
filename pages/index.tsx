import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import Initial from "../components/initial";
import Aboutme from "../components/aboutme";
import Doubt from "./doubt";
import Plans from "./plans";

const Wrapper = styled.section`
  padding: 0.9em;
  background: black;
  align-items: center;
  vertical-align: text-top;
  color: #2c7e20;

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
  background: black;
  color: #2c7e20;
`;

const Adjustment = styled.div`
  justify-content: right;
  display: flex;
`;
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export default function SimpleContainer() {
  return (
    <div>

    <div className="container-fluid">
         <Wrapper>
           {/* <Companylogo /> */}
           <Adjustment>
             <Initial />
           </Adjustment>
         </Wrapper>
         <Wrapper2>
           <Aboutme />
         </Wrapper2>
         <Doubt />
         <Plans />
    </div>
    </div>
    // <React.Fragment>
    //   <CssBaseline />
    //   <Container maxWidth="lg">
    //   <Box sx={{ bgcolor: 'black', height: '100vh',  }}>
    //     <Wrapper>
    //       {/* <Companylogo /> */}
    //       <Adjustment>
    //         <Initial />
    //       </Adjustment>
    //     </Wrapper>
    //     <Wrapper2>
    //       <Aboutme />
    //     </Wrapper2>
    //     <Doubt />
    //     <Plans />
    //   </Box>
    //   </Container>
    // </React.Fragment>
  );
}
