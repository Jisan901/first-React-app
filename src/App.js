import './App.css';
import {useState, useEffect} from 'react'

function App() {
    
    return (
        <div>
            <Countries></Countries>
        </div>
    )
}

function Countries(){
    const [rest,setRest] = useState([])
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {console.log(data); setRest(data)})
    },[])
    
    return (
    <div>
        <h1>Countries</h1>
        <div className="countries">
            {
                rest.map(e => <Country name={e.name.common} continent={e.continents[0]} flag={e.flags.png} population={e.population} independent={e.independent?"independent":"not independent"}></Country>)
            }
        </div>
    </div>
    )
}

function Country(props){
    return (
        <div className="country">
            <img src={props.flag} alt="flag"/>
            <h2>{props.name}</h2>
            <p>continents:{props.continent}</p>
            <p>population:{props.population}</p>
            <p>{props.independent}</p>
        </div>
    )
}

export default App;
