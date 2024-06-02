import React, { useState, useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../lib/theme";
import Navbar from "../components/Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingTimeout, setLoadingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
      }
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 10000); // 10 saniye sonra loading'i durdur
      setLoadingTimeout(timeout);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
        setLoadingTimeout(null);
      }
    };

    const handleRouteChangeError = () => {
      setLoading(false);
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
        setLoadingTimeout(null);
      }
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
      }
    };
  }, [router, loadingTimeout]);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: "flex" }}>
          <Navbar />
          <div style={{ flexGrow: 1, paddingLeft: "250px" }}>
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <Component {...pageProps} />
            )}
          </div>
        </div>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
