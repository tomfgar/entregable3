import React, { useEffect, useRef } from "react";
import "./styles/InputForm.css"

const InputForm = ({ setInputValue }) => {

const inputSearch = useRef()

const handleSubmit = e => {
 e.preventDefault()   
 setInputValue(inputSearch.current.value.trim())
}

return(
    <form className="form" onSubmit={handleSubmit}>
        <input className="form_input" ref={inputSearch} type="text" />
        <button className="form_button">Search</button>
    </form>
)    

}

export default InputForm