import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'
import TodoItems from './TodoItem'

class App extends Component {

  constructor(){
    super()
    this.state = {
      items: [],
      currentItem: { text:'', key:'' },
    }
  }

  handleInput = e =>{
    const itemText = e.target.value
    const currentItem = { text: itemText, key:Date.now() } 
    this.setState({
      currentItem,
    })
  }

  addItem = e =>{
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== ''){
      console.log(newItem)
      const items = [ newItem, ...this.state.items ]
      this.setState({
        items: items,
        currentItem: { text:'', key:''}
      })
    }
  }

  deleteItem = key =>{
    const filteredItems = this.state.items.filter( item=> {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }


  render() {
    return (
      <div className="App">
        <TodoList 
          text = "To-Do List"
          addItem = {this.addItem}
          inputElememt = {this.inputElement}
          handleInput = {this.handleInput}
          currentItem = {this.state.currentItem}
        />
        <TodoItems 
          entries = {this.state.items} 
          deleteItem = {this.deleteItem}
        />
        
      </div>
    )
  }
}
export default App
