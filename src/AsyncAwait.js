import React, { useState, useEffect } from 'react';
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
//  Javascript Nuggets
// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

function AsyncAwait() {
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

  const getUserArticles = async (userName) => {
    try {
      const user = await getUser(userName);
      const userArticles = await getArticles(user.id);
      console.log(userArticles);
      setArticlesList(userArticles);
      return userArticles;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(getUserArticles('susan'));
  getUser('susan')
    .then((user) =>
      getArticles(user.id).then((articles) => console.log(articles))
    )
    .catch((err) => console.log(err));

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <b>Async / Await</b>
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
          <Paper className={classes.paper}>test</Paper>
        </Grid>
        {articlesList.map((article) => {
          return (
            <Grid item xs={6}>
              <Paper className={classes.paper}>{article}</Paper>;
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default AsyncAwait;
