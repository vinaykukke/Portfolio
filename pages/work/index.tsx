import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import images from "data/imageData";
import styles from "styles/work.module.scss";

const Work = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const cols = sm ? 2 : 3;

  return (
    <Box>
      <ImageList cols={cols} gap={8}>
        {images.map((item, i) => {
          const colsListItem = sm && item.featured ? 2 : 1;
          return (
            <ImageListItem key={i} cols={colsListItem}>
              <div>
                <Image
                  className={styles.image_work}
                  width={250}
                  height={250}
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL={item.url}
                />
              </div>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
};

export default Work;
