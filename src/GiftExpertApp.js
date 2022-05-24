import React, { useState } from "react";
import { CategoryAdd } from "./components/CategoryAdd";

const GifExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  //   const handleAdd = () => {
  //     let item = ["Spiderman"];
  //     setCategories([...categories, ...item]);
  //   };

  return (
    <>
      <h2> Gif Expert App</h2>
      <CategoryAdd />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}> {category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
