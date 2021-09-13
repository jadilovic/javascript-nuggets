import './App.css';
import { Button } from '@material-ui/core';
// Callback function

function makeUppercase(value) {
  console.log(value.toUpperCase());
}
// makeUppercase('peter');

const reverseWord = (word) => {
  const reverseWord = word.split('').reverse().join('');
  console.log(reverseWord);
};

const createName = (name, cbFunction) => {
  const fullName = `${name} smith`;
  cbFunction(fullName);
};

createName('peter', makeUppercase);
createName('hello world', reverseWord);
createName('mark', (value) => {
  console.log(value);
});
createName('boby', makeUppercase);

const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  console.log('event listener clicked');
});

function CallbackFunction() {
  return (
    <div className="App">
      <Button
        variant="contained"
        color="primary"
        component="span"
        onClick={() => {
          alert('clicked');
        }}
      >
        Click me
      </Button>
      <Button
        variant="contained"
        color="secondary"
        component="span"
        onClick={() => {
          // CALLBACK HELL
          setTimeout(() => {
            alert('2 seconds');
            setTimeout(() => {
              alert('3 seconds');
              setTimeout(() => {
                alert('1 second');
              }, 1000);
            }, 3000);
          }, 2000);
        }}
      >
        Submit
      </Button>

      <h3>Javascript Nuggets - Callback Function - Callback Hell</h3>
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

export default CallbackFunction;
