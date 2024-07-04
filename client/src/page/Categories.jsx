import React, { useEffect, useState } from "react";
import axiosRequest from "../services/axios";
import CategoriesCard from "./CategoriesCard";
function Categories() {
  const [topics, setTopics] = useState([]);
  const allCategories = async () => {
    const {data} = await axiosRequest.get("/topics");
   console.log('123')
        setTopics(data.topics)
        
    
  };
  useEffect(() => {
    allCategories();
  }, []);

  return (
    <>
      {topics &&
        topics.map((topic) => (
          <CategoriesCard key={topic.id} topic={topic} setTopics={setTopics} />
        ))}
    </>
  );
}

export default Categories;
