import './App.css';
import people from './data/people';
// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find returns array - if no match returns empty array
// Find - returns single instance (object), returns first match, if no match - undefined

// filter
const youngPeople = people.filter((person) => {
  return person.age < 30;
});
const developers = people.filter((person) => person.position === 'developer');
console.log(developers);
// no match
const seniorDevelopers = people.filter(
  (person) => person.position === 'senior-developer'
);
console.log(seniorDevelopers);

// find
const findPerson = people.find((person) => person.name === 'peter');
console.log(findPerson);
// multiple matches - only first match returns
const findGirl = people.find((person) => {
  return person.name === 'susy';
});
// no match return undefined

function FilterAndFind() {
  return (
    <div className="App">
      <h3>Javascript Nuggets - Filter and Find</h3>
      <h4>People values:</h4>
      {people.map((item, index) => {
        return (
          <p
            key={index}
          >{`name: ${item.name} => age: ${item['age']} => position: ${item['position']}`}</p>
        );
      })}
      <hr></hr>
      <h4>Filter age values:</h4>
      {youngPeople.map((person, index) => {
        return (
          <p key={index}>{`Name: ${person.name} => Age: ${person.age}`}</p>
        );
      })}
      <p></p>
      <h4>Find by name:</h4>
      <p>{`name: ${findGirl.name}, age: ${findGirl.age}, position: ${findGirl['position']}`}</p>
    </div>
  );
}

export default FilterAndFind;
