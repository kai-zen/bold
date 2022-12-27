import { Box, Button } from "@mui/material";

const ActionButton = (props) => {
  const {
    px = "20px",
    py = "20px",
    fontSize = "22px",
    backgroundColor = "secondary.main",
    fontWeight = "500",
  } = props;

  return (
    <Button
      variant="contained"
      sx={{ ...styles.button, py, px, fontSize, fontWeight }}
    >
      {props.children}
      <Box sx={{ ...styles.corner, backgroundColor }} />
    </Button>
  );
};

const styles = {
  button: {
    borderRadius: 0,
    position: "relative",
    overflow: "hidden",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
  },
  corner: {
    position: "absolute",
    transform: "rotate(-133.68deg)",
    top: "-60%",
    right: "-33%",
    width: "50%",
    height: "100%",
  },
};

export default ActionButton;
