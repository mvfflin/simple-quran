import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/top-bar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-neutral-300 dark:bg-neutral-950 transition-all max-w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
