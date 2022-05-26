import React, { useEffect, useState } from "react";

const GifGrid = ({ categoria }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGif();
  }, []);

  const getGif = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=wHDw0ZWZX90BqNqG3Dea4ufr8ZoeHP1B&q=One+punch&limit=10";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
    setImages(gifs);
  };

  return (
    <>
      <h3>{categoria}</h3>
      <ul>
        {images.map(({ id, title, url }) => {
          return (
            <li key={id}>
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
//to do agregar componente que  va a mostrar el gif
export default GifGrid;
