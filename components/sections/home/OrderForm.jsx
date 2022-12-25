import { TextInput } from "@/components/common";
import { Box, Typography } from "@mui/material";

const OrderForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
        backgroundColor: "dark.main",
        py: "54px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          maxWidth: "80%",
          fontWeight: "600",
          fontSize: "40px",
          mb: "80px",
        }}
      >
        A Project That Need To Be Done?
      </Typography>
      <Box sx={{ width: "75%" }}>
        <Box sx={{ display: "flex", width: "100%", gap: "2.5%" }}>
          <TextInput label="Full Name" placeholder="Diego Maradona" />
          <TextInput label="Phone Number" placeholder="+989123456789" />
        </Box>
      </Box>
    </Box>
  );
};

export default OrderForm;
