import { useState } from "react";
import './App.css'

function TodoForm({onAdd}) {
    const [text, setText] = useState("");



    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input className="input" type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <button className="btnAdd">Add</button>
        </form>
    )

}
export default TodoForm;