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
          <ImageListItem
            key={item.id}
            cols={item.cols}
            rows={item.rows}
            sx={{ filter: "greyscale(100%)" }}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="project-image"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography
        sx={{
          textAlign: "right",
          width: "100%",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        And{" "}
        <Box component="span" sx={{ fontSize: "24px", fontWeight: "700" }}>
          27
        </Box>{" "}
        more...
      </Typography>
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
