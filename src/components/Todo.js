function Todo(props) {
const {title,desc,_id} = props.todo;
    return (
    <div className="todo">
        <h3>{title}</h3>
        <p>{desc}</p>
        <button onClick={()=>{
            props.onDelete(_id)
        }}>delete</button>
    </div>
    )
}

export default Todo;