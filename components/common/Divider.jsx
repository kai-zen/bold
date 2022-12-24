import { Box } from "@mui/material";

const Divider = (props) => {
  const { width = "90%" } = props;
  return (
    <Box
      sx={{
        width,
        height: "2px",
        maxWidth: "1200px",
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 51.56%, rgba(255, 255, 255, 0) 100%)",
      }}
    />
  );
};

export default Divider;
