import './App.css';
// Array.from - NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

// string
const udemy = 'udemy';
console.log(Array.from(udemy));

// nodeList
const text = document.querySelectorAll('.text');
console.log(text);
const newText = Array.from(text).map((item) => {
  return item.textContent;
});

const items = Array.from({ length: 40 }, (_, index) => {
  return index;
});
console.log(items);

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);
console.log(pages);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  return items.slice(start, start + itemsPerPage);
});
console.log(newItems);

const listNums = [1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5];
const newSetList = new Set(listNums);
const arrFromList = Array.from(newSetList);
console.log(newSetList);

function ArrayFrom() {
  return (
    <div className="App">
      <h3>Javascript Nuggets - Array.from</h3>
      <h4>All text values in index.html from nodeList:</h4>
      {<p>{`${newText}`}</p>}
      <h4>All items:</h4>
      {<p>{`${items}`}</p>}
      <hr></hr>
      <h4>Items added to new arrays:</h4>
      {newItems.map((item, index) => {
        return <p key={index}>{`${item}, `}</p>;
      })}
      <p></p>
      <h4>Array of repeating values:</h4>
      <p>{`${listNums}`}</p>
      <h4>Array.from coverted Set array with unique values:</h4>
      <p>{`${arrFromList}`}</p>
    </div>
  );
}

export default ArrayFrom;
