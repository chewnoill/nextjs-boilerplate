import { ThemeProvider } from "emotion-theming";
import { MDXProvider } from "@mdx-js/react";
import { theme, Flex } from "ui";
import { Page } from "components/page";
import { mdxComponents } from "components/mdx";
import Head from "next/head";

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|Lato|Montserrat|Open+Sans|Oswald|Raleway|Roboto&display=swap"
        rel="stylesheet"
      />
    </Head>
    <MDXProvider components={mdxComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  </ThemeProvider>
);
