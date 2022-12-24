/* eslint-disable @next/next/no-img-element */
import { WhyUsCardFrame } from "@/components/cards";
import { Box, Grid, Typography } from "@mui/material";

const CardOne = () => {
  return (
    <WhyUsCardFrame>
      <Box sx={styles.imageBox1}>
        <img
          src="/test.svg"
          alt="We are reliable!"
          className="first-reason-img"
        />
      </Box>
      <Typography sx={cardsStyles.title1}>
        Reliable people who won’t waste your freaking time
      </Typography>
      <Typography sx={cardsStyles.description1}>
        Our swift-paced team always commited and put your project as our number
        one priority. With high quality output without missed from the deadline.
      </Typography>
    </WhyUsCardFrame>
  );
};

const WhyUs = () => {
  return (
    <Box compnent="section" sx={styles.container}>
      <Typography sx={styles.title}>Why Us?</Typography>
      <Box sx={styles.innerContainer}>
        <Typography sx={styles.innerTitle}>
          We craft your ideas & make it great
        </Typography>
        <Grid container spacing="10px">
          {[0, 1, 2, 3].map((item, i) => (
            <Grid item xs={12} lg={6} key={item}>
              <CardOne />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const styles = {
  container: { display: "flex", flexDirection: "column", alignItems: "center" },
  title: { fontWeight: "600", fontSize: "28px", mb: "36px" },
  innerContainer: {
    width: "100%",
    backgroundColor: "dark.main",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: "10px",
  },
  innerTitle: {
    width: "80%",
    maxWidth: "364px",
    fontSize: "38px",
    fontWeight: "700",
    textAlign: "center",
    py: "62px",
  },
};

const cardsStyles = {
  imageBox1: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  title1: {
    fontSize: "24px",
    fontWeight: "700",
    maxWidth: "312px",
    mt: "46px",
    mb: "14px",
  },
  description1: { fontSize: "14px", fontWeight: "500" },
};

export default WhyUs;
