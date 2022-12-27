import { ActionButton } from "@/components/common";
import { Box, Collapse, Typography } from "@mui/material";
import { useLayoutEffect, useState } from "react";

const Slogan = () => {
  const [checked, setChecked] = useState(false);

  useLayoutEffect(() => {
    setChecked(true);
    return () => {
      setChecked(false);
    };
  }, []);

  return (
    <Collapse in={checked} timeout={2000}>
      <Box sx={styles.container}>
        <Typography component="h2" sx={styles.title}>
          Don’t Wait For The Right Moments{" "}
          <Box component="span" sx={styles.span}>
            Create
          </Box>{" "}
          Them With Us!
        </Typography>
        <ActionButton>Start New Projects</ActionButton>
      </Box>
    </Collapse>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pt: "90px",
    gap: "50px",
  },
  title: {
    width: "90%",
    maxWidth: "900px",
    fontWeight: "700",
    textAlign: "center",
    fontSize: "54px",
  },
  span: { textDecoration: "underline" },
};

export default Slogan;
