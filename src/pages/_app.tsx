import useWindowWidth from "@/hooks/useWindowWidth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import MobileHeader from "@/components/organisms/MobileHeader";
import Header from "@/components/organisms/Header";
import Nav from "@/components/organisms/Nav";
import Footer from "@/components/organisms/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const isWindowWidth = useWindowWidth();

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* {isWindowWidth < 769 ? <MobileHeader /> : <Header />} */}
        <Header />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
