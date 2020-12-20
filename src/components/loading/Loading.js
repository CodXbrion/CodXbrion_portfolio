import React from "react";
import './loading.css'

function Loading() {
  return (
    <>
      <div className="loading-page">
        <div className="loading-spinner-ripple">
          <div className="ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
