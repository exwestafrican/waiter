import React from "react";
import ReactFilestack from "filestack-react";

const ImageUpload = () => {
  console.log("Stuff", process.env.REACT_APP_API_KEY);
  return (
    <ReactFilestack
      apikey={process.env.REACT_APP_API_KEY}
      onSuccess={(res) => console.log(res)}
    />
  );
};

export default ImageUpload;
