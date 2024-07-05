import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriesCard.css";

function CategoriesCard({ topic }) {
  const navigate = useNavigate();
  const [unclick, setUnclik] = useState(false);

  const onHandleUnclick = () => {
    setUnclik(true);
    navigate(`${topic.id}/questions`);
  };

  return (
    <div className={`card-container ${unclick ? "completed" : ""}`}>
      <div className="card" onClick={onHandleUnclick}>
        <img src={topic.img} alt={topic.title} />
        <h1>{topic.title}</h1>
      </div>
    </div>
  );
}

export default CategoriesCard;
