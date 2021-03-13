import { Todo } from "./model/Todos";
import { v1 as uuid } from "uuid";

// constants
const CREATE_TODO = "CREATE_TODO";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SELECT_TODO = "SELECT_TODO";

// Actions & Action Type
interface CreateTodoActionType {
  type: typeof CREATE_TODO;
  payload: Todo;
}

export const createTodoActionCreator = (data: {
  desc: string;
}): CreateTodoActionType => {
  const { desc } = data;
  return {
    type: CREATE_TODO,
    payload: {
      id: uuid(),
      desc,
      isComplete: false,
    },
  };
};

interface EditTodoActionType {
  type: typeof EDIT_TODO;
  payload: { id: string; desc: string };
}

export const editTodoActionCreator = (data: {
  id: string;
  desc: string;
}): EditTodoActionType => {
  const { id, desc } = data;
  return {
    type: EDIT_TODO,
    payload: {
      id,
      desc,
    },
  };
};
