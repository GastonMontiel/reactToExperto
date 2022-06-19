export const sendFileAndGetResponse = async (fileS) => {
  const body = new FormData();
  body.append("file", fileS);
  const resp = await fetch("http://127.0.0.1:5000/upload", {
    method: "POST", // or 'PUT'
    body: body, // data can be `string` or {object}!
  });
  let blobS = await resp.blob();
  let urlS = window.URL.createObjectURL(blobS);

  return urlS;
};
