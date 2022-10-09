import React from 'react'
import { Link } from 'react-router-dom';
import Products from '../products.json';
//import Form from '../Pages/Form';


function products() {
  return (
    <>
      <div className="heading">
        <div className='prHead'>
          Products
          <Link to={'../Pages/Form'}>
          <button className='btn'>
            +
          </button>
          </Link>
          <select className='selection'>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      <div className="prHeading">
      <table>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Status</th>
          <th>Date added</th>
        </tr>
        {Products.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Code}</td>
              <td>{val.Name}</td>
              <td>{val.Qty}</td>
              <td>{val.Price}</td>
              <td className='bool'>{val.Status}</td>
              <td>{val.Date_added}</td>
            </tr>
          )
        })}
      </table>
    </div>
    <div className='bot'>
      <Link to="/" className='pre'>Previous</Link>
      <Link to="/" className='next'>Next</Link>
    </div>
    </div>
    </>
  );
}

export default products


