import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/top-bar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Simple Al-Quran Website</title>
        <meta name="og:title" content="Simple Al-Quran Website" />
        <meta name="og:description" content="Simple website to read Al-Quran" />
        <meta name="og:image" content="./alquran.png" />
        <link rel="shortcut icon" href="./alquran.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./alquran.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./alquran.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./alquran.png" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TopBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
