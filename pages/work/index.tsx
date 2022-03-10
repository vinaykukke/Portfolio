import Box from "@mui/material/Box";
import MediaCard from "components/MediaCard";
import images from "data/imageData";
import { memo } from "react";

const Work = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {images.map((img, i) => (
        <MediaCard
          key={i}
          src={img.src}
          title={img.title}
          url={img.url}
          about={img.about}
        />
      ))}
    </Box>
  );
};

export default memo(Work);
