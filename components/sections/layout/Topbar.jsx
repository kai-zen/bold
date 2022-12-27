import { Logo } from "@/icons";
import { AppBar, Box, Grow, Typography } from "@mui/material";
import { useEffect, useLayoutEffect, useState } from "react";

const Topbar = () => {
  const [checked, setChecked] = useState(false);

  useLayoutEffect(() => {
    setChecked(true);

    return () => {
      setChecked(false);
    };
  }, []);

  return (
    <AppBar component="header" sx={styles.container} elevation={0}>
      <Logo />
      <Box sx={styles.nav}>
        {["Projects", "Contact", "Why us?"].map((item, i) => (
          <Grow key={item} in={checked} {...(checked && { timeout: i * 1200 })}>
            <Typography sx={styles.navItem}>{item}</Typography>
          </Grow>
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
  nav: { display: "flex", gap: "2vw", flexDirection: "row-reverse" },
  navItem: { cursor: "pointer", weight: "500", fontSize: "22px" },
};

export default Topbar;
