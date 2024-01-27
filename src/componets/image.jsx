import React from "react";

const Image = () => {
  return (
    <div className="flex items-center justify-center border-solid">
      <img
        className="rounded-full max-w-xs w-40 h-40  class border-solid border-4 border-grey-700"
        src="https://avatars.githubusercontent.com/u/102310138?v=4"
        alt="Profile photo"
      />
    </div>
  );
};
export default Image;
