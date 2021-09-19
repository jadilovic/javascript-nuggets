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

export default function Phone() {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [countClicks, setCountClicks] = useState(0);
  const [upperCase, setUppersCase] = useState(false);

  let timer = null;
  let inputValueLength = 0;
  let tempInputValue = '';
  let selectedCharacter = '';

  const isInitialMount = useRef(true);
  const previousButton = useRef('');
  const finalizedInput = useRef(false);
  const countCharacters = useRef(0);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      timer = setTimeout(() => {
        console.log(
          'This will run after 1 second! countClicks: ' + countClicks
        );
        setFinalInputValue();
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [countClicks]);

  const isLetter = (character) => {
    return character.length === 1 && character.match(/[a-z]/i);
  };

  // TEMPORARY ADDING CHARACTER TO THE INPUT VALUE IN THE TEXT FIELD
  const addInputValues = (character) => {
    selectedCharacter = character;
    if (upperCase && isLetter(character)) {
      selectedCharacter = character.toUpperCase();
    }
    if (character === '') {
      const newInputValueAfterDeletingOneCharacter = inputValue.substring(
        0,
        inputValue.length - 1
      );
      setInputValue(newInputValueAfterDeletingOneCharacter);
    } else {
      if (
        inputValue.length === inputValueLength ||
        inputValue[inputValue.length - 1] === '1'
      ) {
        setInputValue(inputValue + selectedCharacter);
        console.log('first add');
      } else {
        tempInputValue = inputValue.slice(0, -1);
        setInputValue(tempInputValue + selectedCharacter);
        console.log('follow add');
      }
    }
  };

  // FINAL STEP IN ADDING NEW CHARACTER IN THE TEXT FIELD AFTER SETTIMEOUT RUNS OUT
  // OR SWITCHING TO NEW BUTTON IS CLICKED
  const setFinalInputValue = () => {
    setInputValue(inputValue + selectedCharacter);
    inputValueLength = inputValue.length;
    finalizedInput.current = true;
  };

  // ADD NUMBER ONE CHARACTER
  const addNumberOne = (character) => {
    addInputValues(character);
    setFinalInputValue();
  };

  // ADD VALUES FROM BUTTONS WITH TWO OR MORE CHARACTERS
  const addClickedValues = (...characterValues) => {
    setCountClicks(countClicks + 1);
    countCharacters.current++;

    // RESTART COUNTING IF TOTAL NUMBER OF CHARACTERS IN THE BUTTON REACHED
    if (countCharacters.current > characterValues.length) {
      countCharacters.current = 1;
    }

    // RESTART COUNTING IF NEW BUTTON CLICKED
    if (previousButton.current !== characterValues[0]) {
      countCharacters.current = 1;
      clearTimeout(timer);
      setFinalInputValue();
    }

    // ASSIGN VALUE OF THE CURRENT BUTTON TO BE CHECKED AS THE PREVIOUS BUTTON AFTER THE NEXT CLICK
    previousButton.current = characterValues[0];

    // RESTART COUNTING AFTER INPUT IS FINALIZED
    if (finalizedInput.current) {
      countCharacters.current = 1;
      finalizedInput.current = false;
    }

    // FIRST CHECK IF BUTTON IS SHIFT BUTTON
    // IF NOT ADD INPUT VALUES BASED ON COUNTING CHARACTERS IN THE BUTTON
    if (characterValues[1] === 'shift' && countCharacters.current === 2) {
      deleteCharacter();
      toggleShift();
    } else {
      switch (countCharacters.current) {
        case 1:
          addInputValues(characterValues[0]);
          break;
        case 2:
          addInputValues(characterValues[1]);
          break;
        case 3:
          addInputValues(characterValues[2]);
          break;
        case 4:
          addInputValues(characterValues[3]);
          break;
        case 5:
          addInputValues(characterValues[4]);
          break;
      }
    }
  };

  // CHANGING SHIFT
  const toggleShift = () => {
    if (upperCase) {
      setUppersCase(false);
    } else {
      setUppersCase(true);
    }
  };

  // REMOVING LAST CHARACTER FROM THE INPUT VALUE AND TEXT FIELD
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
                onClick={() => addClickedValues('#', 'shift')}
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
