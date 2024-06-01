import React from "react";
import Head from "next/head";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "../components/Link";
import { styled } from "@mui/material";
import { yellow } from "@mui/material/colors";

const Root = styled("div")(({ theme }) => {
  return {
    textAlign: "center",
    paddingTop: theme.spacing(20),
    backgroundColor: yellow[100],
  };
});

export default function NextPage() {
  return (
    <React.Fragment>
      <Head>
        <title>TG - Ön Muhasebe Programı</title>
      </Head>
      <Root>
        <Typography variant="h4" gutterBottom>
          Test
        </Typography>
        <Typography gutterBottom>
          <Link href="/home">Go to the home page</Link>
        </Typography>
      </Root>
    </React.Fragment>
  );
}
