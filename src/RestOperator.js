import './App.css';
// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, , third, ...restOfTheFruits] = fruits;
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'banana');

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { name, ...rest } = person;

// functions
const getAverage = (name, ...scores) => {
  let avg =
    scores.reduce((total, number) => {
      total += number;
      return total;
    }, 0) / scores.length;
  avg = avg.toFixed(2);
  return avg;
};

const numbersArray = [34, 44, 55, 66, 77];
console.log(getAverage(person.name, 34, 44, 55, 66, 77));
console.log(getAverage(person.name, ...numbersArray));
console.log(getAverage(person.name, [34, 44, 55, 66, 77]));

function RestOperator() {
  return (
    <div className="App">
      <h3>Javascript Nuggets - Rest Operator</h3>
      <h4>All array values:</h4>
      {<p>{`${fruits}`}</p>}
      <h4>Rest values:</h4>
      {<p>{`${restOfTheFruits}`}</p>}
      <hr></hr>
      <h4>First and second values:</h4>
      {<p>{`${first} and ${third}`}</p>}
      <p></p>
      <h4>Specific fruit from rest array:</h4>
      <p>{`${specificFruit}`}</p>
      <h4>Rest person values:</h4>
      <p>{`${rest.lastName} ${rest.job}`}</p>
    </div>
  );
}

export default RestOperator;
