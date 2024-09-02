import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import ROUTES from "../../app/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import selectors
import { selectQuizzes } from "../quizzes/quizzesSlice";
import { selectTopics } from "./topicsSlice";
import { useDispatch } from "react-redux";
import { removeQuiz } from "../quizzes/quizzesSlice";

export default function Topic() {
  const topics = useSelector(selectTopics)
  const quizzes = useSelector(selectQuizzes)
  const { topicId } = useParams();
  const topic = topics[topicId];
  const dispatch = useDispatch();

  if (!topic) {
    return <Navigate to={ROUTES.topicsRoute()} replace />
  }

  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  const handleDeleteQuiz = (nameQuiz) => {
    dispatch(removeQuiz({ name: nameQuiz }));
  }

  return (
    <section>
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz topic" key={quiz.id}>
            <Link key={quiz.id} to={ROUTES.quizRoute(quiz.name)} style={{ textDecoration: 'none' }}>
              <div id="topicAlone">
                <img alt={topic.name} src={topic.icon} />
                <h3 id="h3Topic">{quiz.name}</h3>
              </div>
            </Link>
            <button id="divIcon" onClick={() => handleDeleteQuiz(quiz.name)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
