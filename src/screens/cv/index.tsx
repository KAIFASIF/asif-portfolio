import React from "react";
import pdfUrl from "../../assets/images/asifCv.pdf";

const CV = () => {
  return (
    <div className="h-screen">
      <iframe
        src={pdfUrl}
        title="PDF Viewer"
        className=" w-full h-screen"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default React.memo(CV);
