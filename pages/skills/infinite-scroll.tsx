import { useState, useEffect, useRef, useCallback, ReactElement } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const CardItem = (props) => {
  const { user } = props;
  return (
    <Card sx={{ maxWidth: 275, marginBottom: "2rem" }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {user.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} gutterBottom color="text.secondary">
          Birth Year: {user.birth_year}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Gender: {user.gender}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Height: {user.height}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Eye Color: {user.eye_color}
        </Typography>
      </CardContent>
    </Card>
  );
};

const InfiniteScroll = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver>(null);
  const handleObserver: IntersectionObserverCallback = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) setPage((prevPage) => prevPage + 1);
  };

  const callback = useCallback((node: Element) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(handleObserver);

    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
      const json = await res.json();
      setUsers((prev) => {
        if (prev && json.results) return [...prev, ...json.results];
      });
    };
    fetchApi();
  }, [page]);

  return (
    <div>
      <h1>An infinite list of star wars charecters!!</h1>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {users &&
          users.length &&
          users.map((user, i) => {
            let item: ReactElement;
            const lastItem = users.length === i + 1;
            if (lastItem) {
              item = (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={i} ref={callback}>
                  <CardItem user={user} />
                </Grid>
              );
            } else {
              item = (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={i}>
                  <CardItem user={user} />
                </Grid>
              );
            }
            return item;
          })}
      </Grid>
    </div>
  );
};

export default InfiniteScroll;
