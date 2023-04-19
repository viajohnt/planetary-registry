import React, {useState} from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({planets, onAddPlanet}) {
    const[formData, setFormData] = useState({
        name: "", 
        climate: "",
        terrain: "",
        population: ""
    })

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        const newPlanet = {
            id: uuid(),
            name: formData.name,
            climate: formData.climate,
            terrain: formData.terrain,
            population: formData.population
        }
    fetch("http://localhost:8085/planets", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(newPlanet)
    })
        .then(response => response.json())
        .then(onAddPlanet)
        .then(() => {document.getElementById("create-planet").reset();
        })
    }

 
    return(
        <form id ="create-planet" onSubmit ={handleSubmit}>
            <input 
            onChange = {handleChange}
            type="text" 
            name="name" 
            placeholder="Name" />
            <input
            onChange = {handleChange}
            type="text" 
            name="climate" 
            placeholder="Climate" />
            <input 
            onChange = {handleChange}
            type="text" 
            name="terrain" 
            placeholder="Terrain"/>
            <input 
            onChange = {handleChange}
            type="text" 
            name="population" 
            placeholder="Population" />
            <input 
            type="submit" 
            value="Add"/>
        </form>
    );
}

export default NewPlanetForm;