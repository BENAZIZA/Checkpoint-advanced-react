import React ,{Fragment}from 'react';
import'./Style.css'

import './App.css';
import PropTypes from 'prop-types'

const ProductTable=(props)=> {
  return (
    <div className="App">
    <table>
     <tr>
     <th>name</th>
     <th>price</th>
     <th>category</th>
     </tr>
     {
     	props.products.map((product,index)=>{
     		return(
     			<tr key={index}>
     			
     			<td>{product.name}</td>
     			<td>{product.price}</td>
     			<td>{product.category}</td>
     				
     			</tr>
     			
     			)
     	})
     }
     </table>

    </div>

  );
}
ProductTable.PropTypes={
	products:PropTypes.array,
}


export default ProductTable;
