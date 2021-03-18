import React, { useState } from "react";

interface CategoryProps {
  itemCategory: string;
  categoryOptions: Array<string>;
  selectCategory(x: String): () => void;
}

const PropertyCategory = (cProps: CategoryProps) => {
  return (
    <div className="lg:flex lg:justify-center ">
      <ul className="inline-flex">
        {cProps.categoryOptions.map((category) => (
          <li
            onClick={cProps.selectCategory(category)}
            className={
              cProps.itemCategory === category
                ? "categoryBtnActive"
                : " categoryBtn"
            }
            key={Math.random()}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyCategory;
