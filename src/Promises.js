import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
// Javascript Nuggets - Promises

// async await
// consume/use promises

// Pending, Rejected, FulFilled

const num = 2;

const promise = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum);
  if (randomNum === 2) {
    resolve('right number');
  } else {
    reject('wrong number');
  }
});

promise.then((data) => console.log(data)).catch((error) => console.log(error));

function Promises() {
  const classes = useStyles();

  const [response, setResponse] = useState('');
  const num = 2;

  const promise = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);
    if (randomNum === 2) {
      resolve('right number');
    } else {
      reject('wrong number');
    }
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>Promises</b>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Button
              onClick={() =>
                promise
                  .then((data) => setResponse(data))
                  .catch((error) => setResponse(error))
              }
              variant="contained"
              color="primary"
            >
              Check number
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{response}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Promises;
