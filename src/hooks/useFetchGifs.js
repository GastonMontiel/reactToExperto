import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [data, setData] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGif(categoria).then((imgs) => {
      setData({
        data: imgs,
        loading: false,
      });
    });
  }, [categoria]);

  return data;
};
