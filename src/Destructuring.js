import './App.css';
// faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [johnName, peter, bob, anna, kelly, susan, boby] = friends;
// const [johnName, , bob, , kelly, susan, boby] = friends;

console.log(johnName, peter, bob);
console.log(johnName, peter, bob, anna, kelly);
console.log(johnName, peter, bob, anna, kelly, susan);

let firstItem = 'bob';
let secondItem = 'max';
[firstItem, secondItem] = [secondItem, firstItem];
console.log(firstItem, secondItem);

// Object destructuring
const mark = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

const {
  first,
  last,
  city,
  siblings: { sister },
} = mark;

function Destructuring() {
  return (
    <div className="App">
      <h3>Javascript Nuggets - Destructuring Array and Object</h3>
      <h4>Array values:</h4>
      {<p>{`${fruits}`}</p>}
      {<p>{`${friends}`}</p>}
      <hr></hr>
      <h4>Object values:</h4>
      {<p>{`${first}`}</p>}
      <p></p>
      <h4>Total daily salary:</h4>
      <p></p>
      <h4>Total for all cart items:</h4>
    </div>
  );
}

export default Destructuring;
