/* eslint-disable @next/next/no-img-element */
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Box sx={styles.container}>
      <Typography className="section-title">Our Works</Typography>
      <ImageList
        sx={{ width: "100%", overflowY: "visible" }}
        variant="quilted"
        cols={3}
        gap="1.1%"
      >
        {itemData.map((item) => (
          <ImageListItem key={item.id} cols={item.cols} rows={item.rows}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

const itemData = [
  {
    id: 1,
    img: "/images/projects/1.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 1,
  },
  {
    id: 2,
    img: "/images/projects/2.jpg",
    title: "Breakfast",
    rows: 1,
    cols: 1,
  },
  {
    id: 3,
    img: "/images/projects/3.jpg",
    title: "Breakfast",
    rows: 1,
    cols: 1,
  },

  {
    id: 4,
    img: "/images/projects/4.jpg",
    title: "Breakfast",
    rows: 1,
    cols: 2,
  },

  {
    id: 5,
    img: "/images/projects/5.jpg",
    title: "Breakfast",
    rows: 1,
    cols: 1,
  },
  {
    id: 6,
    img: "/images/projects/3.jpg",
    title: "Breakfast",
    rows: 1,
    cols: 1,
  },
  {
    id: 7,
    img: "/images/projects/7.jpg",
    title: "Breakfast",
    rows: 1,
    cols: 1,
  },
];

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pt: "80px",
  },
};

export default Projects;
