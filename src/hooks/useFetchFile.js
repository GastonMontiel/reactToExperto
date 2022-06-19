import { useEffect, useState } from "react";
import { sendFileAndGetResponse } from "../helpers/sendFileAndGetResponse";

export const useFetchFile = (canSend, file) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (canSend) {
      sendFileAndGetResponse(file).then((resp) => {
        setData({ resp });
      });
    }
  }, [canSend, file]);
  console.log(data);
  return data;
};
