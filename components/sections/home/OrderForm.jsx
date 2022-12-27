import {
  ActionButton,
  RadioOptions,
  TextArea,
  TextInput,
} from "@/components/common";
import { SendIcon } from "@/components/icons";
import { budgetGroups, projectTypes } from "@/constants";
import { Box, Typography } from "@mui/material";

const OrderForm = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>A Project That Need To Be Done?</Typography>
      <Box sx={{ width: "75%" }}>
        <Box sx={styles.inputsBox}>
          <TextInput label="Full Name" placeholder="Diego Maradona" />
          <TextInput label="Phone Number" placeholder="+989123456789" />
        </Box>
      </Box>
      <Box sx={{ my: "80px", width: "100%" }}>
        <Typography sx={styles.title2}>What do you need?</Typography>
        <RadioOptions options={projectTypes} />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography sx={styles.title2}>
          Estimate Your Budget &nbsp;
          <Box component="span" sx={styles.span}>
            In Million
          </Box>
        </Typography>
        <RadioOptions options={budgetGroups} />
      </Box>
      <Box sx={{ mt: "80px", mb: "40px", width: "75%" }}>
        <Typography sx={styles.title2}>
          Give us A Summary Or Anything You Feel Needed.
        </Typography>
        <TextArea />
      </Box>
      <Box sx={styles.submitBox}>
        <ActionButton fontWeight="600" backgroundColor="dark.main" py="10px">
          Send &nbsp;
          <SendIcon />
        </ActionButton>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "dark.main",
    py: "54px",
  },
  title: {
    textAlign: "center",
    maxWidth: "80%",
    fontWeight: "600",
    fontSize: "40px",
    mb: "80px",
  },
  inputsBox: { display: "flex", width: "100%", gap: "2.5%" },
  title2: {
    fontSize: "28px",
    fontWeight: "600",
    textAlign: "center",
    mb: "20px",
  },
  span: { fontWeight: "500", fontSize: "14px", opacity: ".5" },
  submitBox: { width: "75%", display: "flex", justifyContent: "flex-end" },
};

export default OrderForm;
