import React, { useEffect } from "react";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import useStyles from "./styles";
import { AppBar, Container, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => { 
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" height="200" width="200"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
