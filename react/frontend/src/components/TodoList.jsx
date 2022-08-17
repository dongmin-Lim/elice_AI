export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul>
            {todos.map(({ title, completed, id }) => (
                <li onClick={() => toggleTodo(id)}>
                    <h5>{title}</h5>
                    <div>{completed ? "☑️" : "✏️"}</div>
                    <button onClick={() => deleteTodo(id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}