import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UniqueValues from './UniqueValues';
import DynamicObjectKeys from './DynamicObjectKeys';
import FilterAndFind from './FilterAndFind';
import ReduceBasics from './ReduceBasics';
import Destructuring from './Destructuring';
import RestOperator from './RestOperator';
import SpreadOperator from './SpreadOperator';

ReactDOM.render(
  <React.StrictMode>
    {/*  <UniqueValues /> <DynamicObjectKeys /> <FilterAndFind /> <ReduceBasics /> <Destructuring /> <RestOperator /> */}
    <SpreadOperator />
  </React.StrictMode>,
  document.getElementById('root')
);
