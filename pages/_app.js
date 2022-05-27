import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/globals.css";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("black", "white")(props),
      bg: mode("#ffffff", "#262626")(props),
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  colors: {
    gray: {
      700: "#262626",
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
