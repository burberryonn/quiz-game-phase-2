import React, { useEffect } from "react";
import axiosRequest from "../services/axios";
function Question({ topic }) {
  const questionCategories = async () => {
    const { data } = await axiosRequest.get(`/topics/${topic.id}/question`);
    console.log(data);
  };

  useEffect(() => {
    questionCategories();
  }, []);

  return (
  <>
  
  </>

  )
}

export default Question;
