import React, { useState } from "react";

const PropertyCategory = (cProps: { categoryOptions: Array<string> }) => {
  const [itemCategory, setItemCategory] = useState(cProps.categoryOptions[0]);

  const selectItemCategory = (value) => () => {
    setItemCategory(value);
  };

  return (
    <div className="flex justify-center ">
      <ul className="inline-flex">
        {cProps.categoryOptions.map((category) => (
          <li
            onClick={selectItemCategory(category)}
            className={
              itemCategory === category ? "categoryBtnActive" : " categoryBtn"
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
