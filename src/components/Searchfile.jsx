import React from "react";
import "../css/searchFilter.css";

function SearchFilter({ searchTerm, setSearchTerm, sortBy, setSortBy, currentFilter, setFilter }) {
  const categories = ["all", "toys", "games", "clothes", "essentials"];

  return (
    <div className="search-filter-section">
      <div className="search-sort-bar">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="premium-glass-search"
            placeholder="Search classy toys, outfits, premium bags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="sort-dropdown-wrapper">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="premium-glass-select"
          >
            <option value="default">Sort: Classy Choice ✨</option>
            <option value="lowToHigh">Price: Low to High 📈</option>
            <option value="highToLow">Price: High to Low 📉</option>
          </select>
        </div>
      </div>

      <div className="filter-tabs-wrapper">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-tab-btn ${currentFilter === cat ? "active" : ""}`}
          >
            {cat === "all" && "🌈 All Products"}
            {cat === "toys" && "🧸 Soft Toys"}
            {cat === "games" && "🎮 Blocks"}
            {cat === "clothes" && "👗 Clothes"}
            {cat === "essentials" && "🎒 Baby Items"}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchFilter;