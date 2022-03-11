import { memo } from "react";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import MediaCard from "components/MediaCard";
import images from "data/imageData";
// import styles from "styles/work.module.scss";

const Work = () => {
  return (
    <>
      <Head>
        <title>Work - Vinay Kukke</title>
      </Head>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {images.map((img, i) => (
          <Grid item xs={12} sm={6} lg={4} xl={3} key={i}>
            <MediaCard
              key={i}
              src={img.src}
              title={img.title}
              url={img.url}
              about={img.about}
              link={img.link}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default memo(Work);
