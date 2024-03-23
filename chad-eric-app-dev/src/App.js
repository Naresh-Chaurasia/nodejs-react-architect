import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos_list, setTodos_list] = useState([
      { rowNumber: 1, rowDescription: 'Task1', rowAssigned: 'User1' },
      { rowNumber: 2, rowDescription: 'Finish task 2', rowAssigned: 'User2' },
      { rowNumber: 3, rowDescription: 'Submit task 3', rowAssigned: 'User3' }
    ])

  const addToDo = () => {
    if (todos_list.length > 0) {
      const newTodo = {
        rowNumber: todos_list.length + 1,
        rowDescription: 'description',
        rowAssigned: 'user 4'
      }
      setTodos_list(todos_list=>[...todos_list, newTodo])
      console.log(todos_list);
    }
  }

  return (
    <div className='mt-5 container'>
    <div className="card">
      <div className="card-header">
        Your Todo's
      </div>
    <div className='container'>
      <TodoTable todos_key={todos_list}/>
      <button className='btn btn-primary' onClick={addToDo}>
            Add New Todo
      </button>
      <NewTodoForm/>
    </div>
    </div>
    </div>
  );
}

export default App;
