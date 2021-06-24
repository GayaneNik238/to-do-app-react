import { useState } from "react";
import './App.css'

function TodoForm({onAdd}) {
    const [text, setText] = useState("");



    return (
        <div>
            <span id="warnMsg"></span>
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            if(text === "") {
               document.getElementById("warnMsg").innerHTML = "* Please write something";
            } else  {
                document.getElementById("warnMsg").innerHTML = "";
                onAdd(text);
                setText("");
            }
           
            
        }}>
            <input className="input" type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <button className="btnAdd">Add</button>
        </form>
        </div>
    )

}
export default TodoForm;