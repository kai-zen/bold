import {
  ActionButton,
  RadioOptions,
  TextArea,
  TextInput,
} from "@/components/common";
import { SendIcon } from "@/components/icons";
import { Box, Typography } from "@mui/material";

const OrderForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
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
      <Box sx={{ my: "80px", width: "100%" }}>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "600",
            textAlign: "center",
            mb: "20px",
          }}
        >
          What do you need?
        </Typography>
        <RadioOptions
          options={["Web App", "Admin panel", "CMS", "UI/UX", "Others"]}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "600",
            textAlign: "center",
            mb: "20px",
          }}
        >
          Estimate Your Budget &nbsp;
          <Box
            component="span"
            sx={{ fontWeight: "500", fontSize: "14px", opacity: ".5" }}
          >
            In Million
          </Box>
        </Typography>
        <RadioOptions
          options={["Under 10m", "10 - 18m", "18 - 30m", "+ 30m"]}
        />
      </Box>
      <Box sx={{ my: "80px", width: "75%" }}>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "600",
            textAlign: "center",
            mb: "20px",
          }}
        >
          Give us A Summary Or Anything You Feel Needed.
        </Typography>
        <TextArea />
      </Box>
      <Box sx={{ width: "75%", display: "flex", justifyContent: "flex-end" }}>
        <ActionButton fontWeight="600" backgroundColor="dark.main" py="10px">
          Send &nbsp;
          <SendIcon />
        </ActionButton>
      </Box>
    </Box>
  );
};

export default OrderForm;
