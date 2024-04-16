import TodoInput from "./TodoInput";

function TodoForm({ addTodo, newTodo, setNewTodo }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addTodo(newTodo);
      }}
      className="flex flex-col space-y-4"
    >
      <TodoInput
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter a new todo item"
        value={newTodo.text}
        onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
        className="p-2 m-2 border border-gray-300 rounded-md text-sm w-full box-border"
      />
      <TodoInput
        type="text"
        name="category"
        id="category"
        placeholder="Enter a category"
        value={newTodo.category}
        onChange={(e) => setNewTodo({ ...newTodo, category: e.target.value })}
        className="p-2 m-2 border border-gray-300 rounded-md text-sm w-full box-border"
      />
      <input
        type="submit"
        value="Add Todo Item to List"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
    </form>
  );
}

export default TodoForm;
