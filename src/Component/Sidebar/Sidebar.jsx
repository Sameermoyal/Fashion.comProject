import React from 'react';
import './Sidebar.css';

function Sidebar({ sortByPrice }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Sort Products</h2>

      <div className="sort-option">
        <label htmlFor="price-sort">Sort by Price:</label>
        <select id="price-sort" onChange={(e) => sortByPrice(e.target.value)}>
          <option value="default">Select</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
    </aside>
  );
}

export default Sidebar;
