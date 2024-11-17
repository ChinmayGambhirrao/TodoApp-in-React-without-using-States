import React, { useRef } from "react";
import "./App.css";

function App() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const todosContainerRef = useRef(null);

  function addTodo() {
    // Get input values
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    if (!title.trim() || !description.trim()) {
      alert("Both Title and Description are required!");
      return;
    }
    // Create container for todo
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";

    // Add title and description elements
    const titleElement = document.createElement("div");
    titleElement.textContent = title;
    titleElement.className = "todo-title";

    const descriptionElement = document.createElement("div");
    descriptionElement.textContent = description;
    descriptionElement.className = "todo-description";

    // Add edit and delete buttons
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () =>
      editTodo(todoDiv, titleElement, descriptionElement);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodo(todoDiv);

    // Append children to todoDiv
    todoDiv.appendChild(titleElement);
    todoDiv.appendChild(descriptionElement);
    todoDiv.appendChild(editButton);
    todoDiv.appendChild(deleteButton);

    // Append todoDiv to todos container
    todosContainerRef.current.appendChild(todoDiv);

    // Clear input fields
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  }

  function editTodo(todoDiv, titleElement, descriptionElement) {
    const newTitle = prompt("Edit Title:", titleElement.textContent);
    const newDescription = prompt(
      "Edit Description",
      descriptionElement.textContent
    );
    // trim() - removes the whitespaces from both sides of a string
    if (newTitle !== null) titleElement.textContent = newTitle.trim();
    if (newDescription !== null)
      descriptionElement.textContent = newDescription.trim();
  }

  function deleteTodo(todoDiv) {
    todosContainerRef.current.removeChild(todoDiv);
  }

  return (
    <div className="content">
      <h1>Todo App without using States in React   </h1>
      <div>
        <input ref={titleRef} type="text" placeholder="Title" />
        <input ref={descriptionRef} type="text" placeholder="Description" />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div ref={todosContainerRef} className="todos-container"></div>
    </div>
  );
}

export default App;
