import './App.css';
import staff from './data/staff';
import cart from './data/cart';
import axios from 'axios';

// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value
// must return ACC or TOTAL or you get undefined

const totalDailySalary = staff.reduce((total, person) => {
  const salary = person.salary;
  console.log(total);
  return (total += salary);
}, 0);

// Reduce object example
const cartTotal = cart.reduce(
  (total, cartItem) => {
    total.totalItems += cartItem.amount;
    total.totalPrice += cartItem.price * cartItem.amount;
    return total;
  },
  {
    totalItems: 0,
    totalPrice: 0,
  }
);

// API Reduce object example
const url = 'https://api.github.com/users/john-smilga/repos?per_page=20';

const getApiData = async (url) => {
  const response = await axios.get(url);
  const githubUsers = response.data;
  console.log(githubUsers);
  const languagesUsed = githubUsers.reduce((total, user) => {
    const { language } = user;
    if (language) {
      //  total[language]
      //    ? (total[language] = total[language] + 1)
      //    : (total[language] = 1);
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});

  console.log(languagesUsed);
};

getApiData(url);

function ReduceBasics() {
  return (
    <div className="App">
      <h3>Javascript Nuggets - Reduce Basics</h3>
      <h4>Staff values:</h4>
      {staff.map((item, index) => {
        return (
          <p
            key={index}
          >{`name: ${item.name} => age: ${item['age']} => position: ${item['position']} => salary: ${item.salary}`}</p>
        );
      })}
      <hr></hr>
      <h4>Phones cart values:</h4>
      {cart.map((phone, index) => {
        return (
          <p
            key={index}
          >{`Title: ${phone.title} => Price: ${phone.price} => Amount: ${phone.amount}`}</p>
        );
      })}
      <p></p>
      <h4>Total daily salary:</h4>
      {<p>{`Total: ${totalDailySalary}`}</p>}
      <p></p>
      <h4>Total for all cart items:</h4>
      {
        <p>{`Total items: ${
          cartTotal.totalItems
        } => Total price: ${cartTotal.totalPrice.toFixed(2)}`}</p>
      }
    </div>
  );
}

export default ReduceBasics;
