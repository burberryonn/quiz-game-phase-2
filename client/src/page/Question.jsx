import React, { useEffect, useState } from "react";
import axiosRequest from "../services/axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Question.css";

function Question({ topic }) {
  const { topicId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [exit, setExit] = useState(false);
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [complete, setComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const completedCategories =
      JSON.parse(localStorage.getItem("completedCategories")) || [];
    if (completedCategories.includes(topicId)) {
      navigate("/topics");
      setComplete(true);
    } else {
      questionCategories();
    }
  }, [topicId, navigate]);

  const questionCategories = async () => {
    const { data } = await axiosRequest.get(`/topics/${topicId}/questions`);
    if (data.topic.length > 0) {
      setQuestions(data.topic);
    }
    console.log(data);
  };

  const onHandleCheckAnswer = () => {
    if (
      inputValue.toLowerCase().trim() ===
      questions[count].answer.toLowerCase().trim()
    ) {
      setYes(true);
      setNo(false);
    } else {
      setYes(false);
      setNo(true);
    }
  };

  const onHandleNextQuestions = () => {
    if (count + 1 < questions.length) {
      setCount((prev) => prev + 1);
      setInputValue("");
      setYes(false);
    } else {
      const completedCategories =
        JSON.parse(localStorage.getItem("completedCategories")) || [];
      completedCategories.push(topicId);
      localStorage.setItem(
        "completedCategories",
        JSON.stringify(completedCategories)
      );
      setExit(true);
    }
  };

  return (
    <div className="quiz-container">
      {complete && <p>тест пройден</p>}
      {questions.length > 0 && (
        <div className="quiz-card" key={questions[count].id}>
          <h1>{questions[count].question}</h1>
          {questions[count].img && <img src={questions[count].img} alt="" />}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="check-button" onClick={onHandleCheckAnswer}>
            Проверка
          </button>
          {yes && (
            <div>
              <p>Правильный ответ!</p>
              <button className="next-button" onClick={onHandleNextQuestions}>
                Далее
              </button>
            </div>
          )}
          {no && <p>Неправильный ответ, попробуй еще разочек...</p>}
          {exit && (
            <div className="exit-message">
              <h3>
                {useParams === 1 ? (
                  <p>Поздравляю вы прошли музыкальный-квиз</p>
                ) : (
                  <p>Поздравляю вы прошли авто-квиз</p>
                )}
              </h3>
              <button
                className="next-button"
                onClick={() => navigate("/topics")}
              >
                Перейти к категориям
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Question;
