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
import ArrayFrom from './ArrayFrom';
import OptionalChaining from './OptionalChaining';

ReactDOM.render(
  <React.StrictMode>
    {/*  <UniqueValues /> <DynamicObjectKeys /> <FilterAndFind /> <ReduceBasics /> 
    <Destructuring /> <RestOperator /> <SpreadOperator /> <ArrayFrom />*/}
    <OptionalChaining />
  </React.StrictMode>,
  document.getElementById('root')
);
