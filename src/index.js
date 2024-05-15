import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Define the user object
const user = {
  name: "Daniel",
  surname: "Mommsen",
  date_of_birth: "1990-01-01",
  address: "123 Main St",
  country: "RSA",
  email: "daniel@example.com",
  telephone: "123-456-7890",
  company: "XYZ Corp",
  shopping_cart: []
};

// Add items to the shopping cart
const item1 = { name: "Iphone 14 Pro", price: 400 };
const item2 = { name: "Iphone Case", price: 20 };
user.shopping_cart.push(item1, item2);

// Render the React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
