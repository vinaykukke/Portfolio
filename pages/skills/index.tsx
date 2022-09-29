import Head from "next/head";
import Link from "next/link";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MediaCard from "components/MediaCard";
import skillsData from "data/skillsData";

const Skills = () => {
  return (
    <>
      <Head>
        <title>Skills - Vinay Kukke</title>
      </Head>
      <Typography variant="h2" mb="5rem">
        <span className="end-with__backslash">3D</span>
        <span className="begin-with__backslash">Modeling</span>
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {skillsData.map((skill, i) => (
          <Grid item xs={12} sm={6} lg={4} xl={3} key={i}>
            <Link href={`/skills/three-js/${skill.link}`}>
              <CardActionArea>
                <MediaCard
                  src={skill.src}
                  title={skill.title}
                  about={skill.about}
                  link={skill.link}
                />
              </CardActionArea>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Skills;
