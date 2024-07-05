import React from'react';
import Question from './Question';
function CategoriesCard({topic,setTopics}) {
  return (
      <div >
        <img src={topic.img} alt="asd" />
        <h1>{topic.title}</h1>
        <button onClick={() => <Question topic ={topic}/>}>asdasd</button>
      </div>
  );
}

export default CategoriesCard;