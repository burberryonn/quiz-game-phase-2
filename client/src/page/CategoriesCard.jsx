import React from'react';
function CategoriesCard({topic,setTopics}) {
  return (
      <>
        <img src={topic.img} alt="asd" />
        <h1>{topic.title}</h1>
      </>
  );
}

export default CategoriesCard;