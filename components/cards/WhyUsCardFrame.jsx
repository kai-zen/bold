import { Box, Typography } from "@mui/material";

const WhyUsCardFrame = (props) => {
  return (
    <Box sx={stlyes.container}>
      <Typography sx={stlyes.counter}>0{props.index + 1}</Typography>
      {props.children}
    </Box>
  );
};

const stlyes = {
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "secondary.main",
    p: "26px",
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
