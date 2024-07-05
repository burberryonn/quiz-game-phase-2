import React from "react";
function Home({ title }) {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        fontSize: "30px",
      }}>
      <h1>Приветсвуем вас, дорогие друзья!</h1>
      <img src="/hi.jpeg" alt="" />
    </div>
  );
}

export default Home;
