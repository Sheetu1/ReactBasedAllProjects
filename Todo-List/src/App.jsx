import React, { useState } from 'react';

const App = () => {
  const [TodoList, setTodoList] = useState([]);

  const saveTodoList = (e) => {
    e.preventDefault();
    const ToName = e.target.ToName.value.trim();

    if (!ToName) {
      alert("Please enter a task name...");
      return;
    }

    if (!TodoList.includes(ToName)) {
      setTodoList([...TodoList, ToName]);
    } else {
      alert('Todo name already exists...');
    }

    e.target.reset();
  };

  const deleteTodo = (indexToDelete) => {
    const updatedList = TodoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">ToDo List</h1>

      <form
        onSubmit={saveTodoList}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex gap-4 items-center"
      >
        <input
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          name="ToName"
          placeholder="Enter your task"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-md transition-all"
        >
          Add Task
        </button>
      </form>

      {TodoList.length > 0 && (
        <ul className="mt-6 w-full max-w-md bg-white shadow-md rounded-md p-4 space-y-2">
          {TodoList.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 transition"
            >
              <span>✅ {item}</span>
              <span
                className="cursor-pointer text-2xl text-red-500 hover:text-red-700"
                onClick={() => deleteTodo(index)}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
