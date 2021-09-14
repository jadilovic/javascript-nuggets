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
// novi objekat
// lista properties
// ispisuj propertije na objekut u tabeli

function DynamicObjectKeys() {
  const classes = useStyles();

  const [keyValue, setKeyValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [dynamicObject, setDynamicObject] = useState({});
  const [objectsArray, setObjectsArray] = useState([]);

  const updateState = (key, value) => {
    setDynamicObject({ ...dynamicObject, [key]: value });
    handleReset();
  };

  const handleSubmit = () => {
    updateState(keyValue, stateValue);
  };

  const handleReset = () => {
    setKeyValue('');
    setStateValue('');
  };

  const addObject = () => {
    setObjectsArray([...objectsArray, dynamicObject]);
    console.log(objectsArray, 'objects array');
    setDynamicObject({});
  };

  return (
    <>
      {Object.keys(dynamicObject).map((key, index) => {
        const value = dynamicObject[key];
        return <p key={index}>{`${key}: ${value}`}</p>;
      })}
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
        <Button onClick={addObject}>Add Object to Array</Button>
      </Paper>
      {objectsArray.map((individualObject) => {
        const list = Object.keys(individualObject).map((key, index) => {
          const value = individualObject[key];
          return <p key={index}>{`${key}: ${value}`}</p>;
        });
        return list;
      })}
    </>
  );
}

export default DynamicObjectKeys;
