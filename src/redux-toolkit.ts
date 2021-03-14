import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stringify, v1 as uuid } from "uuid";
import todos from "./constants/Todos";
import { Todo } from "./model/Todos";

const todosInitialState: Todo[] = todos;

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    edit: (state, action: PayloadAction<{ id: string; desc: string }>) => {
      // mutate directly - redux toolkit will handle it with magic! immer will magicly convert it to immuatable data
      const { payload } = action;
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state[index].desc = payload.desc;
      }
    },
    toggle: (
      state,
      action: PayloadAction<{ id: string; isComplete: boolean }>
    ) => {
      const { payload } = action;
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state[index].isComplete = payload.isComplete;
      }
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      const { payload } = action;
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
