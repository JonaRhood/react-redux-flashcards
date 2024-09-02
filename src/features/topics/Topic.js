import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import ROUTES from "../../app/routes";
// import selectors
import { selectQuizzes } from "../quizzes/quizzesSlice";
import { selectTopics } from "./topicsSlice";

export default function Topic() {
  const topics = useSelector(selectTopics)
  const quizzes = useSelector(selectQuizzes)
  const { topicId } = useParams();
  const topic = topics[topicId];

  if (!topic) {
    return <Navigate to={ROUTES.topicsRoute()} replace />
  }

  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.name)} style={{ textDecoration: 'none' }}>
            <li className="quiz" key={quiz.id}>
              <img alt={topic.name} src={topic.icon} />
              <h3 id="h3Topic">{quiz.name}</h3>
            </li>
          </Link>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
