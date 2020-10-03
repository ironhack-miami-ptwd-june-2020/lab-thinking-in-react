import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable({ data }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <ProductRow key={row.id} name={row.name} price={row.price} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
