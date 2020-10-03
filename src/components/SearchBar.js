import React from 'react';

export default function SearchBar({
  search,
  setSearch,
  checked,
  filterByStock,
}) {
  return (
    <div>
      <h3>Search:</h3>
      <input
        type="text"
        name="search"
        id=""
        onChange={setSearch}
        value={search}
      />
      Filter Stocked
      <input
        type="checkbox"
        name="stocked"
        checked={checked}
        onChange={filterByStock}
      />
    </div>
  );
}
