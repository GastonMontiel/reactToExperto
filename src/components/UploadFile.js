import React, { memo, useState } from "react";
import { useFetchFile } from "../hooks/useFetchFile";

const UploadFile = memo(() => {
  const [{ canSend, file }, setdata] = useState({ canSend: false, file: {} });

  const handeUpload = (e) => {
    if (
      ["csv", "xls", "xlsx"].includes(e.target.files[0].name.split(".").pop())
    ) {
      setdata({ canSend: true, file: e.target.files[0] });
    } else {
      console.log("no admitido");
    }
  };

  const { resp } = useFetchFile(canSend, file);

  return (
    <>
      <a href={resp?.substring(5, resp.length)} download="file.csv">
        link de descarga
      </a>
      <button onClick={() => console.log(Object.keys(resp).length === 0, resp)}>
        aprta
      </button>
      <input type={"file"} onChange={handeUpload}></input>;)
    </>
  );
});

export default UploadFile;
