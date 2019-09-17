import React, { Component } from 'react'

class TodoList extends Component{
    render(){
        return(
            <div className = "TodoListMain">
                <div className = "header">
                    <h1>{this.props.text}</h1>
                    <form onSubmit = {this.props.addItem}>
                        <input 
                            placeholder = "What will to do?" 
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit"> 新增 </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList