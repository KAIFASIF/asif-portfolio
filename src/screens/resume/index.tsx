import React from "react";
import pdfUrl from "../../assets/images/asifCv.pdf";


const Resume = () => {
  return (
    <div className=" w-full h-screen">
      <iframe
        src={pdfUrl}
        title="PDF Viewer"
        className=" w-full h-screen"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default React.memo(Resume);
