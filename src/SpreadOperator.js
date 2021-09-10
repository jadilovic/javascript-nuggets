import './App.css';
// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy';

const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

function SpreadOperator() {
  return (
    <div className="App">
      <h3>Javascript Nuggets - Spread Operator</h3>
      <h4>All array values:</h4>
      {<p>{`${letters[0]}`}</p>}
      <h4>Rest values:</h4>
      {<p>{`${boys[0]}`}</p>}
      <hr></hr>
      <h4>First and second values:</h4>
      {<p>{`${girls[0]} and ${girls[1]}`}</p>}
      <p></p>
      <h4>Specific fruit from rest array:</h4>
      <p>{`${bestFriend}`}</p>
      <h4>Rest person values:</h4>
      <p>{``}</p>
    </div>
  );
}

export default SpreadOperator;
