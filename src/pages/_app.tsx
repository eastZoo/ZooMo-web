import useWindowWidth from "@/hooks/useWindowWidth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/components/organisms/Header";
import Nav from "@/components/organisms/Nav";
import Footer from "@/components/organisms/Footer";
import { SessionProvider } from "next-auth/react";
import "react-datetime/css/react-datetime.css";

export default function App({ Component, pageProps }: AppProps) {
  const isWindowWidth = useWindowWidth();
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <SessionProvider session={pageProps.session}>
            {/* {isWindowWidth < 769 ? <MobileHeader /> : <Header />} */}
            <Header />
            <Nav />
            <Component {...pageProps} />
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
