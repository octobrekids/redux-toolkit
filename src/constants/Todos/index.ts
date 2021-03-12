import { v1 as uuid } from "uuid";
import { Todo } from "../../model/Todos";

const todos: Todo[] = [
  {
    id: uuid(),
    desc: "Learn react",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "Learn Redux",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "Learn Redux-ToolKit",
    isComplete: false,
  },
];

export default todos;
