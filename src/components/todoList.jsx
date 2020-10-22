import React from 'react'
import { connect } from 'react-redux'
import * as _ from 'underscore'
import { toggleTodo } from '../redux/actions'

console.log('kkkkkkkkkkkkkkkkkkkkkkkk')
const Todo = ({ todo, id, toggleTodo }) => (
    <li onClick={() => toggleTodo(id)}>{todo.content}</li>
)
console.log('pppppppppppppppppppppp')
function TodoList({ todos, toggleTodo }) {
    return (
        _.keys(todos).map((id) => (
            <Todo key={id} id={id} toggleTodo={toggleTodo} todo={todos[id]} />
        ))
    )
}

const mapState = (state) => {
    
}

export default connect(mapState, { toggleTodo })(TodoList);