import React, { useState } from 'react';
import {
  Paper,
  Grid,
  makeStyles,
  Button,
  Card,
  Typography,
  CardActions,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them
// Spread copies values and not refrencing them

function SpreadOperator() {
  const classes = useStyles();
  let [friends, setFriends] = useState([]);
  let [newFriends, setNewFriends] = useState([]);
  const [person, setPerson] = useState({ name: 'john', job: 'developer' });

  const udemy = 'udemy';
  const letters = [...udemy];

  const boys = ['john', 'peter', 'bob'];
  const girls = ['susan', 'anna'];
  const bestFriend = 'arnold';

  //reference
  // const newFriends = friends;
  // copy
  const guys = [...friends, 'mark', 'antonio', 'boogalow'];
  guys[0] = 'cuni';

  // ES2018 - ES8

  return (
    <div>
      <h3>Spread Operator</h3>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>SPREAD VALUES IN UDEMY</Paper>
          </Grid>
          {letters.map((letter, index) => {
            return (
              <Grid key={index} item xs>
                <Paper className={classes.paper}>{letter}</Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <h4>All friends added to one array with help of spread:</h4>
      <Button
        onClick={() => {
          setFriends([...girls, ...boys, bestFriend]);
        }}
        variant="outlined"
        color="secondary"
      >
        Click to display all friends
      </Button>
      {<p>{`${friends}`}</p>}
      <hr></hr>
      <h4>New friends effects friends values:</h4>
      <Button
        onClick={() => {
          setNewFriends([...guys]);
          friends = newFriends;
        }}
        variant="outlined"
        color="primary"
      >
        Click to change friends to new friends
      </Button>
      {<p>{`${newFriends}`}</p>}
      <h4>Person values in the object:</h4>
      <p>{`${person.name}, ${person?.city || 'No city defined'}, ${
        person.job
      }, `}</p>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Developer of the Day
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {person.name}
          </Typography>
          <Typography variant="body2" component="p">
            {person.job}
            <br />
            {'"City: "' + person?.city}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              setPerson({ ...person, city: 'detroit', name: 'aki' });
            }}
            color="secondary"
            size="small"
          >
            Update Developer of the Day
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default SpreadOperator;
