import './App.css';
// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them
// Spread copies values and not refrencing them

const udemy = 'udemy';

const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];
const johnLetters = [...friends[0]];
console.log(johnLetters);

//reference
// const newFriends = friends;
// copy
let newFriends = friends;
newFriends[0] = 'aki';
console.log(friends);
newFriends = [...friends, 'mark', 'antonio', 'boogalow'];
newFriends[0] = 'cuni';
console.log(newFriends);
console.log(friends);

// ES2018 - ES8
const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'detroit', name: 'aki' };
console.log(newPerson);

function SpreadOperator() {
  return (
    <div className="App">
      <h3>Javascript Nuggets - Spread Operator</h3>
      <h4>All friends spread array values:</h4>
      {<p>{`${friends}`}</p>}
      <h4>Spread values in 'udemy':</h4>
      {<p>{`${letters}`}</p>}
      <hr></hr>
      <h4>First and second values:</h4>
      {<p>{`${girls[0]} and ${girls[1]}`}</p>}
      <p></p>
      <h4>New person values in the object:</h4>
      <p>{`${newPerson.name}, ${newPerson.city}, ${newPerson.job}, `}</p>
      <h4>Spread new friends values:</h4>
      <p>{`${newFriends}`}</p>
    </div>
  );
}

export default SpreadOperator;
