import './App.css';
import menu from './data/menu';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function UniqueValues() {
  const classes = useStyles();
  let categoryList = menu.map((item) => {
    return item.category;
  });

  categoryList = new Set(categoryList);
  categoryList = ['all', ...categoryList];

  return (
    <div className="App">
      <h3>Unique Values (ES6)</h3>
      <h4>Menu values:</h4>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Category</TableCell>\
            </TableRow>
          </TableHead>
          <TableBody>
            {menu.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <hr></hr>
      <h4>Unique category values:</h4>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Category</TableCell>\
            </TableRow>
          </TableHead>
          <TableBody>
            {categoryList.map((category, index) => (
              <TableRow key={index}>
                <TableCell align="right">{category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UniqueValues;
