function TodoInput({ type, name, id, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-2 m-2 border border-gray-300 rounded-md text-sm w-full box-border"
    />
  );
}

export default TodoInput;
