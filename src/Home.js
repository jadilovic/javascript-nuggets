import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant="h6">Home Page of JavasScript Nuggets</Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>
          Click on blue button in the top left corner to display different
          JavasScript nugget components.
        </Typography>
      </div>
    </main>
  );
}

export default Home;
