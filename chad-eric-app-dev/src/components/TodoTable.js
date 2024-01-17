import TodoRowItem from "./TodoRowItem"

function TodoTable(argument) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>

            {argument.todos_key.map(todo => (
                    <TodoRowItem
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable