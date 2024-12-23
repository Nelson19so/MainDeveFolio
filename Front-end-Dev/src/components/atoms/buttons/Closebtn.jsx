import React, { useState } from "react";
function Closebtn({ className, onClick, title }) {
  return (
    <>
      <div>
        <button className={className} title={title} onClick={onClick}>
          {console.log("Close Button clicked")}
        </button>
      </div>
    </>
  );
}

export default Closebtn;
