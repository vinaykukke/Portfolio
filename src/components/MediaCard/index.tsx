import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProps } from "./types";
import styles from "./mediacard.module.scss";

const MediaCard = (props: IProps) => {
  const { pathname } = useRouter();
  const data_page = pathname.substring(1);
  return (
    <Card className={styles.media_card__container}>
      <Image
        className={styles.image_work}
        width={140}
        height={140}
        src={props.thumbnail ? props.thumbnail : props.src}
        alt={props.title}
        loading="lazy"
        layout="responsive"
        placeholder="empty"
      />
      {props.title || props.about ? (
        <CardContent
          className={styles.media_card__content}
          data-page={data_page}
        >
          <Typography
            sx={{ textTransform: "capitalize" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.title}
          </Typography>
          {props.about && (
            <Typography variant="body2" color="text.secondary">
              {props.about}
            </Typography>
          )}
        </CardContent>
      ) : null}
      {props.actionItems && (
        <CardActions>
          <Button size="medium">
            <a href={props.link} target="_blank">
              Visit
            </a>
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default MediaCard;
