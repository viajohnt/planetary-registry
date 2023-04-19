import React from "react"
import Planet from "./Planet"

function PlanetList({planets}) {
    const planetCollection = planets.map((planet) => 
        <Planet
        key = {planet.id}
        planet = {planet}
        />
    )
    
    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planetCollection} 
            </tbody>
        </table>
    );
}

export default PlanetList;