import { Box, Typography } from "@mui/material";

const TextInput = (props) => {
  const { placeholder = "" } = props;
  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ fontSize: "28px", fontWeight: "600", mb: "10px" }}>
        {props.label}
      </Typography>
      <input className="text-input" placeholder={placeholder} />
    </Box>
  );
};

export default TextInput;
