/* eslint-disable @next/next/no-img-element */
import { projectsGallery } from "@/constants";
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
        {projectsGallery.map((item) => (
          <ImageListItem key={item.id} cols={item.cols} rows={item.rows}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: "80px",
  },
};

export default Projects;
