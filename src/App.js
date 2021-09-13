import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
import Home from './Home';
import SpreadOperator from './SpreadOperator';
import UniqueValues from './UniqueValues';
import DynamicObjectKeys from './DynamicObjectKeys';
import FilterAndFind from './FilterAndFind';
import ReduceBasics from './ReduceBasics';
import Destructuring from './Destructuring';
import RestOperator from './RestOperator';
import OptionalChaining from './OptionalChaining';
import Promises from './Promises';
/*
import ArrayFrom from './ArrayFrom';
import CallbackFunction from './CallbackFunction';
*/

const NuggetsMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleClick = (event) => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <Router>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={handleClick}
      >
        Open JavasScript Nugget
      </Button>
      <Menu variant="selectedMenu" open={openMenu} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/spread-operator">Spread Operator</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/unique-values">Unique Values</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/dynamic-object-keys">Dynamic Object Keys</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/filter-and-find">Filter and Find</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/reduce-basics">Reduce Basics</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/destructuring">Destructuring</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/rest-operator">Rest Operator</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/optional-chaining">Optional Chaining</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/promises">Promises</Link>
        </MenuItem>
      </Menu>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/spread-operator">
        <SpreadOperator />
      </Route>
      <Route path="/unique-values">
        <UniqueValues />
      </Route>
      <Route path="/filter-and-find">
        <FilterAndFind />
      </Route>
      <Route path="/reduce-basics">
        <ReduceBasics />
      </Route>
      <Route path="/destructuring">
        <Destructuring />
      </Route>
      <Route path="/dynamic-object-keys">
        <DynamicObjectKeys />
      </Route>
      <Route path="/rest-operator">
        <RestOperator />
      </Route>
      <Route path="/optional-chaining">
        <OptionalChaining />
      </Route>
      <Route path="/promises">
        <Promises />
      </Route>
    </Router>
  );
};

export default NuggetsMenu;
