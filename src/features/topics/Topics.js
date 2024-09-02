import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { removeTopic } from "./topicsSlice";
import Swal from "sweetalert2";
// import selector
import { useSelector, useDispatch } from "react-redux";
import { selectTopics } from "./topicsSlice";

export default function Topics() {
  const topics = useSelector(selectTopics);
  const dispatch = useDispatch();

  const handleRemoveTopic = async (nameTopic) => {
    const { value } = await Swal.fire({
      title: "Confirm Deletion",
      text: "Deleting this topic will also remove all associated quizzes. Are you sure you want to proceed?",
      icon: "warning",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      showCancelButton: true,
    });
    
    if (value) {
      dispatch(removeTopic({ name: nameTopic }));
    }
  };
  

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          <li className="topic" key={topic.id}>
            <Link key={topic.id} to={ROUTES.topicRoute(topic.name)} className="topic-link">
              <div className="topic-container">
                <img alt={topic.name} src={topic.icon} />
                <div className="text-content">
                  <h2>{topic.name}</h2>
                  <p>{topic.quizIds.length} Quizzes</p>
                </div>
              </div>
            </Link>
            <button id="divIconTopics" onClick={() => handleRemoveTopic(topic.name)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </li>
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
