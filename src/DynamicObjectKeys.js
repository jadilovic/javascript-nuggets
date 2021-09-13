import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';
import {
  Button,
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// Dynamicaly changing object keys by using square bracket notation

function DynamicObjectKeys() {
  const classes = useStyles();

  const [keyValue, setKeyValue] = useState('');
  const [stateValue, setStateValue] = useState('');

  const state = {
    loading: true,
    name: '',
    job: '',
  };

  const updateState = (key, value) => {
    console.log('test update state');
    state[key] = value;
  };

  const handleSubmit = () => {
    updateState(keyValue, stateValue);
  };

  const handleReset = () => {
    setKeyValue('');
    setStateValue('');
    console.log(state);
  };

  console.log(state);

  let appState = 'loading';
  // appState = 'error';
  const app = { [appState]: true };
  console.log(app);

  let keyName = 'computer';
  app[keyName] = 'apple';
  console.log(app);

  return (
    <>
      <Paper>
        <h2>Form Demo</h2>

        <TextField
          onChange={(event) => setKeyValue(event.target.value)}
          value={keyValue}
          label={'Key Value'} //optional
        />
        <TextField
          onChange={(event) => setStateValue(event.target.value)}
          value={stateValue}
          label={'State Value'} //optional
        />
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleReset}>Reset</Button>
      </Paper>
    </>
  );
}

export default DynamicObjectKeys;
