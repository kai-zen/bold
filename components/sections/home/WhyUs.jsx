/* eslint-disable @next/next/no-img-element */
import { WhyUsCardFrame } from "@/components/cards";
import { Box, Grid, Typography } from "@mui/material";

const CardOne = () => {
  return (
    <WhyUsCardFrame counter={1}>
      <Box sx={cardsStyles.imageBox1}>
        <img
          src="/images/why-us/one.svg"
          alt="We are reliable!"
          className="reason-img"
        />
      </Box>
      <Box sx={{ mb: "26px" }}>
        <Typography sx={cardsStyles.title1}>
          Reliable people who won’t waste your freaking time
        </Typography>
        <Typography sx={cardsStyles.description1}>
          Our swift-paced team always commited and put your project as our
          number one priority. With high quality output without missed from the
          deadline.
        </Typography>
      </Box>
    </WhyUsCardFrame>
  );
};

const CardTwo = () => {
  return (
    <WhyUsCardFrame counter={2}>
      <Box sx={{ mt: "10px" }}>
        <Typography sx={cardsStyles.title3}>Bunch of Rockstar Team</Typography>
        <Typography sx={cardsStyles.description1}>
          All of our Members have years of experience working in the field and
          been handled various type of project. So, to get the perfect result
          couldn’t be something that hard!
        </Typography>
      </Box>
      <Box sx={cardsStyles.imageBox2}>
        <img
          src="/images/people.png"
          alt="We got expert members!"
          className="reason-img"
        />
      </Box>
    </WhyUsCardFrame>
  );
};

const CardThree = () => {
  return (
    <WhyUsCardFrame counter={3}>
      <Box sx={{ mt: "10px" }}>
        <Typography sx={cardsStyles.title3}>
          Easy communicated your ideas
        </Typography>
        <Typography sx={cardsStyles.description1}>
          You will directly communicated with our Project Manager who cares
          about your project’s success and maintain a relationship between you
          and our experienced members.
        </Typography>
      </Box>
      <Box sx={cardsStyles.imageBox3}>
        <img
          src="/images/why-us/three.svg"
          alt="Easy communication!"
          className="reason-img"
        />
      </Box>
    </WhyUsCardFrame>
  );
};

const WhyUs = () => {
  return (
    <Box compnent="section" sx={styles.container}>
      <Typography className="section-title">Why Us?</Typography>
      <img src="/images/people.png" alt="Our team members." />
      <Box sx={styles.innerContainer}>
        <Typography sx={styles.innerTitle}>
          We craft your ideas & make it great
        </Typography>
        <Grid container spacing="10px">
          <Grid item xs={12} lg={6}>
            <CardOne />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CardTwo />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CardThree />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CardOne />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const styles = {
  container: { display: "flex", flexDirection: "column", alignItems: "center" },
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
  imageBox2: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
  },
  imageBox3: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    mb: "26px",
  },
  title1: {
    fontSize: "24px",
    fontWeight: "700",
    maxWidth: "312px",
    mt: "46px",
    mb: "14px",
  },
  title3: {
    fontSize: "24px",
    fontWeight: "700",
    maxWidth: "360px",
    mt: "46px",
    mb: "14px",
  },
  description1: { fontSize: "14px", fontWeight: "500", maxWidth: "500px" },
};

export default WhyUs;
