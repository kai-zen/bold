import { Box, Button } from "@mui/material";

const ActionButton = (props) => {
  const { px = "20px", py = "20px", fontSize = "22px" } = props;
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 0,
        position: "relative",
        px,
        py,
        fontWeight: "500",
        fontSize,
        overflow: "hidden",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      }}
    >
      {props.children}
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "secondary.main",
          transform: "rotate(-133.68deg)",
          top: "-25px",
          right: "-25px",
          width: "50px",
          height: "50px",
        }}
      />
    </Button>
  );
};

export default ActionButton;
