import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { removeQuiz } from "../../features/quizzes/quizzesSlice"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
// import quiz selector
import { selectQuizzes } from "./quizzesSlice";


export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIcons = Object.values(quizzes).map(quiz => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = quiz.icon;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(loadIcons)
      .then(() => setLoading(false))
      .catch(error => {
        console.error("Error loading icons", error);
        setLoading(false);
      })
  }, [quizzes]);

  const handleDeleteQuiz = (quizName) => {
    dispatch(removeQuiz({ name: quizName }));
  }

  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <li className="quiz" key={quiz.id}>
              <div id="divQuiz">
                <Link key={quiz.id} to={ROUTES.quizRoute(quiz.name)} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div id="divQuizImgName">
                    {loading ? <Skeleton
                      circle
                      height="100%"
                      containerClassName="avatar-skeleton"
                    /> : <img alt={quiz.topicName} src={quiz.icon} />}
                    <div>
                      <h3>{loading ? <Skeleton width={220} /> : quiz.name}</h3>
                    </div>
                  </div>
                </Link>
                <button id="divIcon" onClick={() => handleDeleteQuiz(quiz.name)}>
                  {loading ? <Skeleton circle width="14px" containerClassName="avatar-skeleton" /> : <FontAwesomeIcon icon={faXmark} />}
                </button>
                <div id="divQuizTopic">
                  <p>{loading ? <Skeleton width={100} /> : 'Topic:'}&nbsp;</p>
                  <Link key={quiz.topicName} to={ROUTES.topicRoute(quiz.topicName)}><h4>{loading ? <Skeleton /> : quiz.topicName}</h4></Link>
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
