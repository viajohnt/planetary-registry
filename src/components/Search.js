import React from "react"

function Search({search, setSearch}) {

    function handleChange(event) {
        setSearch(event.target.value)
    }
    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="Search..."/>
        </div>
    );
}

export default Search;