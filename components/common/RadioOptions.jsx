import { Badge, Box, Button } from "@mui/material";

const RadioOptions = (props) => {
  return (
    <Box sx={styles.container}>
      {props.options.map((option, i) =>
        option === "CMS" ? (
          <Badge badgeContent="-10%" key={i} color="primary">
            <Button variant="outlined" sx={styles.option} key={i}>
              {option}
            </Button>
          </Badge>
        ) : (
          <Button variant="outlined" sx={styles.option} key={i}>
            {option}
          </Button>
        )
      )}
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    width: "100%",
    justifyContent: "center",
  },
  option: {
    py: "8px",
    px: "20px",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "0",
    border: "1px solid #D9D9D9",
  },
};

export default RadioOptions;
