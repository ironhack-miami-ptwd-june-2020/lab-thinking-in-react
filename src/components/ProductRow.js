import React from 'react';

export default function ProductRow({ id, category, price, stocked, name }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
