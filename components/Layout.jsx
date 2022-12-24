import { Box } from "@mui/material";
import { Topbar } from "./sections/layout";

const Layout = (props) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.childrenBox}>
        <Topbar />
        <Box>{props.children}</Box>
      </Box>
      <Box sx={styles.fadeWhiteBullet} />
    </Box>
  );
};

const styles = {
  container: {
    width: "100%",
    backgroundColor: "secondary.main",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  childrenBox: {
    width: {
      xs: "100%",
      vs: "calc(100% - 24px)",
      sm: "516px",
      md: "696px",
      lg: "936px",
      vl: "1116px",
      xl: "1296px",
    },
    py: "40px",
  },
  fadeWhiteBullet: {
    position: "absolute",
    width: "300px",
    height: "300px",
    left: "-102px",
    top: "-86px",
    backgroundColor: "#FFF",
    filter: "blur(300px)",
  },
};

export default Layout;
