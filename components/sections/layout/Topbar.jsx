import { Logo } from "@/icons";
import { AppBar, Box, Typography } from "@mui/material";

const Topbar = () => {
  return (
    <AppBar component="header" sx={styles.container} elevation={0}>
      <Logo />
      <Box sx={styles.nav}>
        {["Projects", "Contact", "Why us?"].map((item) => (
          <Typography key={item} sx={styles.navItem}>
            {item}
          </Typography>
        ))}
      </Box>
    </AppBar>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    width: "100%",
    position: "static",
  },
  nav: { display: "flex", gap: "2vw" },
  navItem: { cursor: "pointer", weight: "500", fontSize: "22px" },
};

export default Topbar;
