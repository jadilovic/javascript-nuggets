import React, { useState, useEffect, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button } from '@material-ui/core';
import users from './data/users';
import articles from './data/articles';

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
//  Javascript Nuggets - Fetch and Fetch Errors

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-project';

console.log(fetch(url));

const AsyncAwait = () => {
  const classes = useStyles();

  const example = async () => {
    return 'hello there';
  };

  example().then((result) => console.log(result));

  const someFunc = async () => {
    const result = await example();
    console.log(result);
    return result;
  };

  console.log(someFunc());
  const [articlesList, setArticlesList] = useState([]);

  function getUser(name) {
    return new Promise((resolve, reject) => {
      const user = users.find((user) => user.name === name);

      if (user) {
        return resolve(user);
      } else {
        reject(`No such user with name : ${name}`);
      }
    });
  }

  function getArticles(userId) {
    return new Promise((resolve, reject) => {
      const userArticles = articles.find((user) => user.userId === userId);

      if (userArticles) {
        return resolve(userArticles.articles);
      } else {
        reject(`Wrong ID`);
      }
    });
  }
  /*
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setArticlesList(data);
    });
*/
  const database = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setArticlesList(data);
  };

  useEffect(() => {
    database();
  }, []);

  //  Javascript Nuggets
  // Fetch Errors
  // Only throws an error if cannot resolve.
  // Error Response still a response (400-500)

  const fetchErrors = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>Fetch</b>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Button
              onClick={() => fetchErrors()}
              variant="contained"
              color="primary"
            >
              Fetch Tours data in console
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>test</Paper>
        </Grid>
        {articlesList.map((article, index) => {
          return (
            <Grid key={index} item xs={6}>
              <Paper className={classes.paper}>{article.name}</Paper>;
              <Paper className={classes.paper}>{article.info}</Paper>;
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default AsyncAwait;
