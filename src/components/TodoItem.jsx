import DeleteButton from "./DeleteButton";

function TodoItem({ todo, markDone, deleteTodo }) {
  return (
    <div key={todo.id} className="bg-white shadow-md rounded-md p-4 my-2 flex relative justify-between">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600 mt-1"
        checked={todo.isCompleted}
        onChange={() => markDone(todo.id)}
      />
      <div className="flex content ml-4">
        <div className="flex flex-col justify-center">
          <span className="todo-text text-lg font-semibold text-center">{todo.text}</span>
          <div className="text-center mt-2">
            <span className="category-text text-sm text-gray-500">Category: </span>
            <span className="category-name text-sm text-gray-700">{todo.category}</span>
          </div>
        </div>
      </div>
      <DeleteButton className="absolute bottom-0 right-0 m-2" deleteTodo={() => deleteTodo(todo.id)} />
    </div>
  );
}

export default TodoItem;
