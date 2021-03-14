import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";
import todos from "./constants/Todos";
import { Todo } from "./model/Todos";

const todosInitialState: Todo[] = todos;

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    create: {
      reducer: (
        state,
        action: PayloadAction<{ id: string; desc: string; isComplete: boolean }>
      ) => {
        const { payload } = action;
        state.push(payload);
      },
      prepare: (desc: string) => ({
        payload: {
          id: uuid(),
          desc,
          isComplete: false,
        },
      }),
    },
    edit: (state, action: PayloadAction<{ id: string; desc: string }>) => {
      // mutate directly - redux toolkit will handle it with magic! immer will magicly convert it to immuatable data
      const { payload } = action;
      const todoToEdit = state.find((todo) => todo.id === payload.id);
      if (todoToEdit) {
        todoToEdit.desc = payload.desc;
      }
    },
    toggle: (
      state,
      action: PayloadAction<{ id: string; isComplete: boolean }>
    ) => {
      const { payload } = action;
      const todoToEdit = state.find((todo) => todo.id === payload.id);
      if (todoToEdit) {
        todoToEdit.isComplete = payload.isComplete;
      }
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      const { payload } = action;
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index) {
        state.splice(index, 1);
      }
    },
  },
});

const selectedTodoSlice = createSlice({
    name: 'selectedTodo',
    initialState: null as string | null,
    reducers: {
        select: (state,action: PayloadAction<{id: string}> ) => action.payload.id,
    }
})

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {},
    extraReducers: {
        [todosSlice.actions.create.type]: state => state + 1,
        [todosSlice.actions.edit.type]: state => state + 1,
        [todosSlice.actions.toggle.type]: state => state + 1,
        [todosSlice.actions.remove.type]: state => state + 1,
    }
})
