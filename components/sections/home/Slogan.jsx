import { ActionButton } from "@/components/common";
import { Box, Button, Typography } from "@mui/material";

const Slogan = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "90px",
        gap: "50px",
      }}
    >
      <Typography
        sx={{
          width: "90%",
          maxWidth: "900px",
          fontWeight: "700",
          textAlign: "center",
          fontSize: "54px",
        }}
      >
        Don’t Wait For The Right Moments{" "}
        <Box component="span" sx={{ textDecoration: "underline" }}>
          Create
        </Box>{" "}
        Them With Us!
      </Typography>
      <ActionButton>Start New Projects</ActionButton>
    </Box>
  );
};

export default Slogan;
