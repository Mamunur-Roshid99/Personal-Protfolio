import React from "react";

import CircularText from "../../CircularText/CircularText";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#171C29]">
      <CircularText
        text="MamunurRoshid"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />
    </div>
  );
};

export default Loader;
