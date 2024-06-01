import React from "react";
import Head from "next/head";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "../components/Link";
import { styled } from "@mui/material";

const Root = styled("div")(({ theme }) => {
  return {
    textAlign: "center",
    paddingTop: theme.spacing(4),
  };
});

export default function Stok() {
  return (
    <React.Fragment>
      <Head>
        <title>Ön Muhasebe</title>
      </Head>
      <Root>
        <Typography variant="h4" gutterBottom>
          Stok
        </Typography>
      </Root>
    </React.Fragment>
  );
}
