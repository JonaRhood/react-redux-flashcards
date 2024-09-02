import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTopics } from "../features/topics/topicsSlice";
import {useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
import Swal from "sweetalert2";
// import addTopic
import { addTopic } from "../features/topics/topicsSlice";

export default function NewTopicForm() {
  const topics = useSelector(selectTopics);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      Swal.fire({
        title: "Name your new Quizz",
        input: "text",
        inputLabel: "Quizz Name:",
        icon: "warning",
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "You need to write something!";
          } else if (value) {
            setName(value);
          }
        }
      });
      return;
    } else if (Object.keys(topics).includes(name)) {
      Swal.fire({
        title: "Topic Name Already Exists",
        input: "text",
        inputLabel: "New Topic Name:",
        icon: "warning",
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "You need to write something!";
          } else if (value) {
            setName(value);
          }
        }
      });
      return;
    } else if (!icon) {
      Swal.fire({
        title: "Select an Icon from the List",
        icon: "warning",
        showCancelButton: true,
      });
      return;
    }

    // dispatch new topic
    dispatch(addTopic({
      id: uuidv4(),
      name: name,
      icon: icon
    }));
    navigate(ROUTES.topicsRoute());
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Topic Name"
            className="webInput"
          />
          <select
            onChange={(e) => setIcon(e.currentTarget.value)}
            required
            defaultValue="default"
            className="webSelect"
          >
            <option value="default" disabled hidden>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="center" type="submit">Add Topic</button>
      </form>
    </section>
  );
}
