import React, { useState } from "react";

const App = () => {
  const [TodoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null); // null means Add mode

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();

    if (!trimmed) {
      alert("Please enter a task name...");
      return;
    }

    // Check for duplicate (only in Add mode)
    if (editIndex === null && TodoList.includes(trimmed)) {
      alert("Todo already exists...");
      return;
    }

    if (editIndex !== null) {
      // Update task
      const updatedList = [...TodoList];
      updatedList[editIndex] = trimmed;
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      // Add task
      setTodoList([...TodoList, trimmed]);
    }

    setInputValue(""); // Clear input
  };

  const startEditing = (index) => {
    setInputValue(TodoList[index]);
    setEditIndex(index);
  };

  const deleteTodo = (indexToDelete) => {
    const updatedList = TodoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);

    // If currently editing the one we deleted, reset edit state
    if (editIndex === indexToDelete) {
      setEditIndex(null);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">ToDo List</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex gap-4 items-center"
      >
        <input
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your task"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-all"
        >
          {editIndex !== null ? "Update Task" : "Add Task"}
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
              <div className="flex gap-3 items-center">
                {/* Edit Button */}
                <button
                  className="text-blue-600 hover:text-blue-800 text-sm"
                  onClick={() => startEditing(index)}
                >
                  ✏️
                </button>
                {/* Delete Button */}
                <button
                  className="text-red-500 hover:text-red-700 text-xl"
                  onClick={() => deleteTodo(index)}
                >
                  &times;
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
