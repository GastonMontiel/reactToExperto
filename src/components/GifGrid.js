import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({ categoria }) => {
  const { data: images, loading } = useFetchGifs(categoria);

  return (
    <div className="card-grid">
      <h3>{categoria}</h3>

      {loading && <p>loading</p>}

      {images.map((img) => {
        return <GifGridItem key={img.id} {...img} />;
      })}
    </div>
  );
};
//to do agregar componente que  va a mostrar el gif
export default GifGrid;
