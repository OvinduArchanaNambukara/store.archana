import React from "react";

const PreviewImage: React.FC = () => {
  return (
      <div className="" style={{width: "50%", float: "right"}}>
        <h1>Preview</h1>
        <div className="img-preview"
             style={{minWidth: "50px", float: "left", minHeight: "50px", backgroundColor: "green"}}
        />
      </div>
  );
}

export default PreviewImage;
