import React from "react";

function NoFoud() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        fontSize: "40px",
      }}
    >
      <h1>404</h1>
      <img src="/homer.gif" alt="homer.gif" />
    </div>
  );
}

export default NoFoud;
