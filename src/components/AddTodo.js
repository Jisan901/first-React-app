import {useState} from 'react';

function AddTodo(props) {
    
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const sendTodo = (e)=>{
        e.preventDefault()
        if (title.length>0&&desc.length>0) {
            props.addTodo(title,desc)
            setTitle('')
            setDesc('')
        }
        else{
            alert('title or Description can\'t be empty')
        }
    }
    return (
    <form className="add-todo" onSubmit={sendTodo}>
        <h2>Add Todo</h2>
        <input value={title} onChange={(e)=>{
            setTitle(e.target.value);
        }} placeholder="Title"/>
        <input value={desc} onChange={(e)=>{
            setDesc(e.target.value)
        }} placeholder="Description"/>
        <button type="submit">Add</button>
    </form>
    )
}

export default AddTodo;