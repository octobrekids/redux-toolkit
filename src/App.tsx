import React, { useRef, useState } from 'react';
import './App.css';
import todos from './constants/Todos';

const selectedTodoId = todos[1].id;
const editedCount = 0;

function App() {
  const [newTodoInput, setNewTodoInput] = useState<string>("");
  const [editTodoInput, setEditTodoInput] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const editInput = useRef<HTMLInputElement>(null);


  
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
