import * as React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProps } from "./types";
import styles from "./mediacard.module.scss";

const MediaCard = (props: IProps) => (
  <Card className={styles.media_card__container}>
    <Image
      className={styles.image_work}
      width={140}
      height={140}
      src={props.src}
      alt={props.title}
      loading="lazy"
      layout="responsive"
      placeholder="blur"
      blurDataURL={props.url}
    />
    <CardContent className={styles.media_card__content}>
      <Typography
        sx={{ textTransform: "capitalize" }}
        gutterBottom
        variant="h5"
        component="div"
      >
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.about ||
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="medium">
        <a href={props.link} target="_blank">
          Visit
        </a>
      </Button>
      <Button disabled size="medium">
        My Contribution
      </Button>
    </CardActions>
  </Card>
);

export default MediaCard;
