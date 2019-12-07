import React, { useState } from 'react'

const ToDo = props => {
    let { title, id } = props.todo

    return (
        <div className="todo-list-item" value={id}>
            {title}
        </div>
    )
}

const App = () => {
    const [todos, setTodos] = useState([
        {
            title: 'Learn React',
            id: 111
        },
        {
            title: 'Learn Vue',
            id: 222
        },
        {
            title: 'Learn Node.js',
            id: 333
        }
    ]);

    return (
        <div className="app">
            <div className="todo-list">
                <h1>Hello React.js</h1>
                {
                    todos.map( (todo, index) => (
                        <ToDo todo={todo} index={index} key={index}></ToDo>
                    ))
                }
            </div>
        </div>
    )
}

export default App