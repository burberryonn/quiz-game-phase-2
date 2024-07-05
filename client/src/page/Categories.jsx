import React, { createContext, useContext, useEffect, useState } from "react";
import axiosRequest from "../services/axios";
import CategoriesCard from "./CategoriesCard";
import './CategoriesCard.css'
function Categories() {
  const [topics, setTopics] = useState([]);
  const allCategories = async () => {
    const { data } = await axiosRequest.get("/topics");
    setTopics(data.topics);
  };
  
  useEffect(() => {
    allCategories();
  }, []);

  return (
    <div className="card-container">
      {topics &&
        topics.map((topic) => (
          <CategoriesCard key={topic.id} topic={topic} setTopics={setTopics} />
        ))}
    </div >
  );
}

export default Categories;
