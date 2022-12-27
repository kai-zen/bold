import { socialMedia } from "@/constants";
import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={styles.container}>
      <Typography sx={styles.title}>
        Do you have a question, an idea, or a project That Need to be done?
      </Typography>
      <Grid container sx={styles.gridContainer}>
        <Grid item xs={12} sm={6} lg={4} sx={styles.gridItem}>
          <Box sx={styles.sectionTitle}>Book A Call</Box>
          <Typography sx={{ ...styles.text, mt: "32px", mb: "14px" }}>
            +98-991-716-6019
          </Typography>
          <Typography sx={styles.text}>+98-991-716-6019</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} sx={styles.gridItem}>
          <Box sx={styles.sectionTitle}>Social Media</Box>
          <Grid container sx={{ width: "268px", mt: "16px" }} rowSpacing="14px">
            {socialMedia.map((item) => (
              <Grid key={item} item xs={6}>
                <Typography sx={styles.text}>{item}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} sx={styles.gridItem}>
          <Box sx={{ ...styles.sectionTitle, position: "relative" }}>
            Mail Us!
            <Box sx={styles.corner} />
          </Box>
          <Typography sx={{ ...styles.text, mt: "32px" }}>
            Info@boldgroup.ir
          </Typography>
        </Grid>
      </Grid>
      <Typography sx={{ fontSize: "13px", mt: "80px" }}>
        Made by{" "}
        <Box component="span" sx={{ fontWeight: "700" }}>
          BoldGroup
        </Box>
        .
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pt: "80px",
  },
  title: {
    width: "80%",
    maxWidth: "640px",
    fontSize: "38px",
    fontWeight: "700",
    textAlign: "center",
  },
  gridContainer: { maxWidth: { xs: "268px", sm: "566px", lg: "864px" } },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "40px",
  },
  sectionTitle: {
    backgroundColor: "#D9D9D9",
    width: "268px",
    py: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "secondary.main",
    fontWeight: "700",
    fontSize: "30px",
  },
  text: { fontSize: "24px", fontWeight: "500", textAlign: "center" },
  corner: {
    position: "absolute",
    transform: "rotate(-133.68deg)",
    top: "-50%",
    right: "-33%",
    width: "50%",
    height: "100%",
    backgroundColor: "secondary.main",
  },
};

export default Footer;
