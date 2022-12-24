import { ThemeProvider } from "@mui/material";
import Layout from "@/components/layout";
import { theme } from "@/theme";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
