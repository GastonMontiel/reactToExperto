import React, { useState } from "react";
import { CategoryAdd } from "./components/CategoryAdd";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2> Gif Expert App</h2>
      <CategoryAdd setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} categoria={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
