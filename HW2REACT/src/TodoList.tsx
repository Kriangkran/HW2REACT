import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./output.css";
interface Todo {
  id: number;
  text: string;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My To Do List</h2>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border pr-10 flex-grow"
          placeholder="Add Name"
        />
        <button
          className="bg-green-500 text-white pl-6 rounded ml-5"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            <span>{todo.text}</span>
            <FaTrash onClick={() => deleteTodo(todo.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
