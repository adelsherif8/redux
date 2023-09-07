import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
  filter: "all",
};
const Slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action) => {
      const taskID = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskID ? { ...task, isDone: !task.isDone } : task
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, description } : task
      );
    },
  },
});
export const { addTask, toggleTask, setFilter, editTask } = Slice.actions;
export default Slice.reducer;
