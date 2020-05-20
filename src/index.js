import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductTable from './PruductTable';
import * as serviceWorker from './serviceWorker';
const products =[
  {name:'shirt',price:'100$',category:'clothes'},{name:'robe',price:'125$',category:'clothes'},{name:'tv',price:'810$',category:'Electronics'}]

ReactDOM.render(
  <React.StrictMode>
  
    <ProductTable products={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
