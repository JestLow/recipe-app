import React from 'react'

function Form({ setFilter, setQuery, filter }) {
    const filterHandler = (e) => {
        setFilter(e.target.value)
    }

    const queryHandler = () => {
        setQuery(filter)
        setFilter("")
    }

    return (
        <div className="input-group mb-3 float-end">
            <input onChange={filterHandler} type="text" className="form-control" placeholder="Search" value={filter} />
            <button onClick={queryHandler} className="btn btn-outline-secondary" type="button" >Button</button>
        </div>
    
    )
}

export default Form
