import './App.css';
import {useState} from 'react';
import Nav from './components/Nav'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Mongo from './utilities/MongoLocal.react.min.js'

function App() {
    const [todos,setTodos]=useState([])
    
    const db = new Mongo('mongodb-uri67');
    const db_todos = db.create('todos');
    
    setTodos(db_todos.query_all())
    
    
    const addTodo = (title,desc)=>{
        const new_todo={title,desc};
        db_todos.insert_one(new_todo)
        setTodos(db_todos.query_all())
    }
    const onDelete = (id)=>{
        db_todos.delete_one({_id:id})
        setTodos(db_todos.query_all())
    }
    
    return (
        <div>
            <Nav />
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete}/>
        </div>
    )
}

export default App;
