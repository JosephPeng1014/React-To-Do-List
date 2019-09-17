import React, { Component } from 'react'

class TodoItems extends Component{
    createTasks = item =>{
        return (
            <div>
                <form onClick = { () => this.props.deleteItem(item.key)}>
                    <li key={item.key}>
                        {item.text}
                        <code>  </code>
                        <button type="submit"> X </button>
                    </li>
                </form>   
            </div>
        )
    }

    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)

        return <ul className="theList">{listItems}</ul>
    }
}

export default TodoItems
