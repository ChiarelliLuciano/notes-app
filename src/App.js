import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Notes from './components/Notes/Notes';
import useStyles from './styles.js'

function App() {
  const classes = useStyles();
  return (
    <Grow in>
    <Container maxWidth="lg">
      <Navbar/>
        <Container>
          <Grid className={classes.mainContainer}>
            <Notes/>
          </Grid>
        </Container>
    </Container>
    </Grow>
  );
}

export default App;
