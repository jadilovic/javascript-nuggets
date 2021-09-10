import './App.css';
import menu from './data/menu';

function UniqueValues() {
  let categoryList = menu.map((item) => {
    return item.category;
  });

  categoryList = new Set(categoryList);
  categoryList = ['all', ...categoryList];

  return (
    <div className="App">
      <h3>Javascript Nuggets - Unique Values (ES6)</h3>
      <h4>Menu values:</h4>
      {menu.map((item) => {
        return <p>{`name: ${item.name} => category: ${item.category}`}</p>;
      })}
      <hr></hr>
      <h4>Unique category values:</h4>
      {categoryList.map((category) => {
        return <p>{category}</p>;
      })}
    </div>
  );
}

export default UniqueValues;
