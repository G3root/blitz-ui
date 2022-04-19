import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo titleTemplate="%s | Blitz-UI" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
