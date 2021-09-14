import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  TextField,
  Paper,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [countClicks, setCountClicks] = useState(0);
  const [upperCase, setUppersCase] = useState(false);

  const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
  };

  const addInputValues = (value) => {
    if (upperCase && isLetter(value)) {
      value = value.toUpperCase();
    }
    if (value === '') {
      const newStr = inputValue.substring(0, inputValue.length - 1);
      setInputValue(newStr);
    } else {
      setInputValue(inputValue + value);
    }
  };

  const addOneOfFourValues = (...values) => {
    setCountClicks(countClicks + 1);
    if (countClicks === values.length + 1) {
      setCountClicks(1);
    }
    const timer = setTimeout(() => {
      switch (countClicks) {
        case 0:
          addInputValues(values[0]);
          setCountClicks(0);
          break;
        case 1:
          addInputValues(values[1]);
          setCountClicks(0);
          break;
        case 2:
          addInputValues(values[2]);
          setCountClicks(0);
          break;
        case 3:
          addInputValues(values[3]);
          setCountClicks(0);
          break;
        case 4:
          addInputValues(values[4]);
          setCountClicks(0);
          break;
      }
    }, 1500);
    return () => clearTimeout(timer);
  };

  const hashShift = (hash) => {
    setCountClicks(countClicks + 1);
    if (countClicks === 3) {
      setCountClicks(1);
    }
    const timer = setTimeout(() => {
      switch (countClicks) {
        case 0:
          {
            addInputValues(hash);
            setCountClicks(0);
          }
          break;
        case 1:
          {
            if (upperCase) {
              setUppersCase(false);
            } else {
              setUppersCase(true);
            }
            setCountClicks(0);
            addInputValues('');
          }
          break;
      }
    }, 1000);
    return () => clearTimeout(timer);
  };

  const inputTwoValues = (first, second) => {
    setCountClicks(countClicks + 1);
    if (countClicks === 3) {
      setCountClicks(1);
    }
    const timer = setTimeout(() => {
      switch (countClicks) {
        case 0:
          {
            addInputValues(first);
            setCountClicks(0);
          }
          break;
        case 1:
          {
            setCountClicks(0);
            addInputValues(second);
          }
          break;
      }
    }, 1000);
    return () => clearTimeout(timer);
  };

  const oneBackspace = (value) => {
    setCountClicks(countClicks + 1);
    if (countClicks === 3) {
      setCountClicks(1);
    }
    const timer = setTimeout(() => {
      switch (countClicks) {
        case 0:
          {
            addInputValues('');
            setCountClicks(0);
          }
          break;
        case 1:
          {
            addInputValues(value);
            setCountClicks(0);
          }
          break;
      }
    }, 500);
    return () => clearTimeout(timer);
  };

  return (
    <Container maxWidth="sm">
      <Typography align="center" component="h1" variant="h5">
        Write SMS with an old phone
      </Typography>
      <TextField
        id="outlined-full-width"
        label="SMS text"
        helperText="Nokia 9000"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={inputValue}
      />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color="primary"
                onClick={() => oneBackspace('1')}
              >
                1 ⌫
              </Button>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color="primary"
                onClick={() => addOneOfFourValues('a', 'b', 'c', '2')}
              >
                2 a b c
              </Button>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color="primary"
                onClick={() => addOneOfFourValues('d', 'e', 'f', '3')}
              >
                3 d e f
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color="primary"
                onClick={() => addOneOfFourValues('g', 'h', 'i', '4')}
              >
                4 g h i
              </Button>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color="primary"
                onClick={() => addOneOfFourValues('j', 'k', 'l', '5')}
              >
                5 j k l
              </Button>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color="primary"
                onClick={() => addOneOfFourValues('m', 'n', 'o', '6')}
              >
                6 m n o
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color="primary"
                onClick={() => addOneOfFourValues('p', 'q', 'r', 's', '7')}
              >
                7 p q r s
              </Button>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color="primary"
                onClick={() => addOneOfFourValues('t', 'u', 'v', '8')}
              >
                8 t u v
              </Button>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color="primary"
                onClick={() => addOneOfFourValues('w', 'x', 'y', 'z', '9')}
              >
                9 w x y z
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color="primary"
                onClick={() => inputTwoValues('*', '+')}
              >
                * +
              </Button>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color="primary"
                onClick={() => inputTwoValues('0', ' ')}
              >
                0 ⌴
              </Button>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color={`${upperCase ? 'secondary' : 'primary'}`}
                onClick={() => hashShift('#')}
              >
                # ⇧
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
