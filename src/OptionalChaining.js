import './App.css';
// Optional Chaining

const people = [
  {
    name: 'bob',
    location: { street: '123 main street', timezone: { offset: '+7:00' } },
  },
  { name: 'peter', location: { street: '123 Pine street' } },
  {
    name: 'susan',
    location: { street: '123 Apple street', timezone: { offset: '+9:00' } },
  },
];

people.forEach((element) => {
  console.log(element.name);
  console.log(element.location.street);
  console.log(
    (element.location &&
      element.location.timezone &&
      element.location.timezone.offset) ||
      'No value'
  );
});

people.forEach((element) => {
  console.log('Name: ' + element.name);
  console.log('Street: ' + element.location.street);
  console.log(
    'Time zone offset: ' + element.location?.timezone?.offset || 'No value'
  );
});

function OptionalChaining() {
  return (
    <div className="App">
      <h3>Javascript Nuggets - Optional Chaining</h3>
      <h4>All text values in index.html from nodeList:</h4>
      {<p>{``}</p>}
      <h4>All items:</h4>
      {<p>{``}</p>}
      <hr></hr>
      <h4>Items added to new arrays:</h4>
      <p></p>
      <h4>Array of repeating values:</h4>
      <p>{``}</p>
      <h4>Array.from coverted Set array with unique values:</h4>
      <p>{``}</p>
    </div>
  );
}

export default OptionalChaining;
