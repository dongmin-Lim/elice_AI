
import TodoForm from './TodoForm'; 
import TodoList from './TodoList'; 
// import TodoFilter from './TodoFilter'; 

export default function TodosPage({ state, addTodo, deleteTodo, toggleTodo }) {
    // const filteredTodos = state.todos.filter((todo) => {
    //     const { filter } = state;
    //     return (
    //         filter === "all" || 
    //         (filter === "completed" && todo.completed) || 
    //         (filter === "todo" && !todo.completed)
    //     )
    // })

    return (
        <div>
            <h2>TodosPage</h2>
            <TodoForm onSubmit={addTodo}/>
            {/* <TodoFilter filter={state.filter} changeFilter={changeFilter}/> */}
            <TodoList todos={state.todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </div>
    )
}