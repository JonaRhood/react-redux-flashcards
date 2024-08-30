import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// import selector
import { useSelector, useDispatch } from "react-redux";
import { selectTopics } from "./topicsSlice";

export default function Topics() {
  const topics = useSelector(selectTopics);
  const dispatch = useDispatch();

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
            <li className="topic" key={topic.id}>
              <div className="topic-container">
                <img src={topic.icon} alt="" />
                <div className="text-content">
                  <h2>{topic.name}</h2>
                  <p>{topic.quizIds.length} Quizzes</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
