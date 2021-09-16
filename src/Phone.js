import React, { useState, useEffect, useRef } from 'react';
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
  const [countCharacters, setCountCharacters] = useState(0);
  let inputValueLength = 0;
  let tempInputValue = '';
  let selectedCharacter = '';

  const isInitialMount = useRef(true);
  const previousValue = useRef('');
  const hashtagClicks = useRef(0);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const timer = setTimeout(() => {
        console.log(
          'This will run after 1 second! countClicks: ' + countClicks
        );
        setFinalInputValue();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countClicks]);

  const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
  };

  const addInputValues = (value) => {
    selectedCharacter = value;
    if (upperCase && isLetter(value)) {
      selectedCharacter = value.toUpperCase();
    }
    if (value === '') {
      const newInputValueAfterDeletingOneCharacter = inputValue.substring(
        0,
        inputValue.length - 1
      );
      setInputValue(newInputValueAfterDeletingOneCharacter);
    } else {
      if (inputValue.length === inputValueLength) {
        setInputValue(inputValue + selectedCharacter);
        console.log('first add');
      } else {
        tempInputValue = inputValue.slice(0, -1);
        setInputValue(tempInputValue + selectedCharacter);
        console.log('follow add');
      }
    }
  };

  const setFinalInputValue = () => {
    setInputValue(inputValue + selectedCharacter);
    inputValueLength = inputValue.length;
  };

  const addNumberOne = (value) => {
    setCountClicks(countClicks + 1);
    addInputValues(value);
  };

  const addClickedValues = (...values) => {
    let resetCountCharacters = false;
    setCountCharacters(countCharacters + 1);
    setCountClicks(countClicks + 1);
    if (
      countCharacters > values.length ||
      previousValue.current !== values[0]
    ) {
      setCountCharacters(1);
      resetCountCharacters = true;
    }
    previousValue.current = values[0];

    let count = countCharacters;
    if (resetCountCharacters) {
      count = 1;
    }

    switch (count) {
      case 1:
        addInputValues(values[0]);
        break;
      case 2:
        addInputValues(values[1]);
        break;
      case 3:
        addInputValues(values[2]);
        break;
      case 4:
        addInputValues(values[3]);
        break;
      case 5:
        addInputValues(values[4]);
        break;
    }
  };

  const hashtagAndShift = (hashtag) => {
    hashtagClicks.current++;
    setCountClicks(countClicks + 1);
    if (hashtagClicks.current === 3) {
      hashtagClicks.current = 1;
    }
    switch (hashtagClicks.current) {
      case 1:
        {
          addInputValues(hashtag);
        }
        break;
      case 2:
        {
          if (upperCase) {
            setUppersCase(false);
          } else {
            setUppersCase(true);
          }
          hashtagClicks.current = 0;
        }
        break;
    }
  };

  const deleteCharacter = () => {
    addInputValues('');
    setCountClicks(countClicks + 1);
  };

  return (
    <Container maxWidth="sm">
      <Typography align="center" component="h1" variant="h5">
        Write SMS with an old phone
      </Typography>
      <TextField
        autoFocus={true}
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
                onClick={() => addNumberOne('1')}
              >
                1
              </Button>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button
                style={{ textTransform: 'lowercase', minWidth: '90px' }}
                variant="contained"
                color="primary"
                onClick={() => addClickedValues('a', 'b', 'c', '2')}
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
                onClick={() => addClickedValues('d', 'e', 'f', '3')}
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
                onClick={() => addClickedValues('g', 'h', 'i', '4')}
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
                onClick={() => addClickedValues('j', 'k', 'l', '5')}
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
                onClick={() => addClickedValues('m', 'n', 'o', '6')}
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
                onClick={() => addClickedValues('p', 'q', 'r', 's', '7')}
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
                onClick={() => addClickedValues('t', 'u', 'v', '8')}
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
                onClick={() => addClickedValues('w', 'x', 'y', 'z', '9')}
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
                onClick={() => addClickedValues('*', '+')}
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
                onClick={() => addClickedValues(' ', '0')}
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
                onClick={() => hashtagAndShift('#')}
              >
                # ⇧
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
                color="default"
                onClick={() => deleteCharacter()}
              >
                ⌫
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
