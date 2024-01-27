import React from "react";

const Bio = () => {
  return (
    <>
      <div
        style={{
          padding: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "30px",
        }}
        className="text-white flex items-center justify-center bg-white-900 rounded-xl"
      >
        <p>Lead @Owasp ~ Opensource Contributor</p>
      </div>
      <div
        style={{
          padding: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          marginBottom: "30px"
        }}
        className="text-white flex items-center justify-center bg-white-900 rounded-xl"
      >
        <p>Cybersecurity ~ WebDev</p>
      </div>
    </>
  );
};

export default Bio;
