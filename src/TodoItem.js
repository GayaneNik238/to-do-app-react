import './App.css';

function TodoItem({todo, onChange, onDelete}) {
    return(
        <div className="todoItem">
            <label>
                <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    //e.target.checked;
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }} />
                {todo.text}
                <button className="deleteItem" onClick={() => { 
                    onDelete(todo);
                }}>X</button>
            </label>
        </div>
    )
}

export default TodoItem;