import React from "react";
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
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.name)} style={{textDecoration: 'none', color: 'inherit'}}>
            <li className="quiz">
              <img src={quiz.icon} />
              <div>
                <h3>{quiz.name}</h3>
                <div>
                  <p>Topic:</p>
                  <Link key={quiz.id} to={ROUTES.topicRoute(quiz.topicName)}><h4>{quiz.topicName}</h4></Link>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
