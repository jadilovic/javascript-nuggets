import './App.css';
// Dynamicaly changing object keys by using square bracket notation

function DynamicObjectKeys() {
  const items = [{ name: 'aki', age: 22, 'school-uni': 'davenport' }];

  let appState = 'loading';
  // appState = 'error';
  const app = { [appState]: true };
  console.log(app);

  let keyName = 'computer';
  app[keyName] = 'apple';
  console.log(app);

  const state = {
    loading: true,
    name: '',
    job: '',
  };

  const updateState = (key, value) => {
    state[key] = value;
  };

  console.log(state);
  updateState('name', 'peter');
  console.log(state);
  updateState('loading', false);
  updateState('job', 'developer');
  updateState('age', 33);
  updateState('name', 'aki');
  console.log(state);

  return (
    <div className="App">
      <h3>Javascript Nuggets - Dynamic Object Keys</h3>
      <h4>Item values:</h4>
      {items.map((item, index) => {
        return (
          <p
            key={index}
          >{`name: ${item.name} => age: ${item['age']} => school: ${item['school-uni']}`}</p>
        );
      })}
      <hr></hr>
      <h4>Key name values:</h4>
      <p>{`${keyName}: ${app[keyName]}`}</p>
      <h4>Key name updates:</h4>
      <p>{`${state['name']}, ${state['age']}, ${state.age}, ${state.job}, ${state['loading']} `}</p>
    </div>
  );
}

export default DynamicObjectKeys;
