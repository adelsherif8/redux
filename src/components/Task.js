import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../JS/Reducers/reducers";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleCheckboxChange = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEditInputChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, description: editedDescription }));
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editedDescription}
            onChange={handleEditInputChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <span onDoubleClick={handleDoubleClick}>{task.description}</span>
      )}
      <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
        {task.description}
      </span>
    </li>
  );
};

export default Task;
