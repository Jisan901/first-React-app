import Todo from "./Todo";

function Todos({todos,onDelete}) {
    return (
    <div className="todos">
        <h2>Todos</h2>
        {todos.length>0?todos.map(todo=> <Todo todo={todo} onDelete={onDelete} />):<h3 className="alert">No Todos to display</h3>}
    </div>
    )
}

export default Todos;