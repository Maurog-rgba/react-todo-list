import { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoItem from "../../components/TodoItem";

import { todoList } from "../../../todo-list/src/data/todos";

import "../../App.css";

function useTodoList() {
  const [todos, setTodos] = useState(todoList);
  const [newTodo, setNewTodo] = useState({ text: "", category: "" });

  const markDone = (todoId) => {
    const updatedTodos = [...todos];
    const todoIndex = updatedTodos.findIndex((todo) => todo.id === todoId);
    if (todoIndex !== -1) {
      updatedTodos[todoIndex].isCompleted = !updatedTodos[todoIndex].isCompleted;
    }
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const addTodo = (newTodo) => {
    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo.text,
      category: newTodo.category,
      isCompleted: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo({ text: "", category: "" });
  };

  return { todos, newTodo, setNewTodo, markDone, deleteTodo, addTodo };
}

function TodoPage() {
  const { todos, newTodo, setNewTodo, markDone, deleteTodo, addTodo } = useTodoList();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Task List</h1>
      <div className="todo-list w-full max-w-md mx-auto">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} markDone={markDone} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} newTodo={newTodo} setNewTodo={setNewTodo} />
      </div>
    </div>
  );
}

export default TodoPage;
