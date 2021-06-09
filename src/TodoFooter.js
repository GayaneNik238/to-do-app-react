import './App.css'
function TodoFooter({todos, onClearCompleted}) {
    const completedSize = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div className="footer">
            <span>{completedSize}/{todos.length} Completed</span>
            <button className="clear" onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}
export default TodoFooter;