import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const filteredTasks =
    filter === "done" ? tasks.filter((task) => task.isDone) : tasks;

  return (
    <ul>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default ListTask;
