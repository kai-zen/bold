import { Box, Button } from "@mui/material";

const ActionButton = (props) => {
  const { px = "20px", py = "20px", fontSize = "22px" } = props;
  return (
    <Button variant="contained" sx={{ ...stlyes.button, py, px, fontSize }}>
      {props.children}
      <Box sx={stlyes.corner} />
    </Button>
  );
};

const stlyes = {
  button: {
    borderRadius: 0,
    position: "relative",
    fontWeight: "500",
    overflow: "hidden",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
  },
  corner: {
    position: "absolute",
    backgroundColor: "secondary.main",
    transform: "rotate(-133.68deg)",
    top: "-25px",
    right: "-25px",
    width: "50px",
    height: "50px",
  },
};

export default ActionButton;
