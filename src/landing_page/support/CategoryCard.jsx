import React from "react";
import "./support.css";

function CategoryCard({ title, icon }) {
  return (
    <div className="category-card">
      <div className="category-icon">
        {icon}
      </div>
      <h6>{title}</h6>
    </div>
  );
}

export default CategoryCard;