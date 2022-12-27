import { Box, Typography } from "@mui/material";

const WhyUsCardFrame = (props) => {
  return (
    <Box sx={stlyes.container}>
      <Typography sx={stlyes.counter}>0{props.counter}</Typography>
      {props.children}
    </Box>
  );
};

const stlyes = {
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "secondary.main",
    p: "26px 26px 0",
  },
  counter: {
    fontWeight: "700",
    fontSize: "32px",
    position: "absolute",
    top: "26px",
    left: "26px",
  },
};

export default WhyUsCardFrame;
