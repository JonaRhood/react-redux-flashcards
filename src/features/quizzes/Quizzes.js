import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// import quiz selector
import { selectQuizzes } from "./quizzesSlice";


export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes);

  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <div id="divQuiz">
              <Link key={quiz.id} to={ROUTES.quizRoute(quiz.name)} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div id="divQuizImgName">
                  <img alt={quiz.topicName} src={quiz.icon} />
                  <div>
                    <h3>{quiz.name}</h3>
                  </div>
                </div>
              </Link>
              <div id="divIcon">
                <FontAwesomeIcon icon={faXmark} />
              </div>
              <div id="divQuizTopic">
                <p>Topic: &nbsp;</p>
                <Link key={quiz.topicName} to={ROUTES.topicRoute(quiz.topicName)}><h4>{quiz.topicName}</h4></Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
