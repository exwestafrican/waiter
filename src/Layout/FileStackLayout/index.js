import React from "react";
import ReactFilestack from "filestack-react";

const ImageUpload = () => {
  return (
    <ReactFilestack
      apikey={"AdSAdknU0R0SEd92YxfEJz"}
      onSuccess={(res) => console.log(res)}
    />
  );
};

export default ImageUpload