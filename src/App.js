import React, { Component } from 'react'

// import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{
      users[10] = {name:'Kang Chiang', id:'11', email:'kachiang@gmail.com'}
      users[11] = {name:'Sara Chiang', id:'12', email:'sarapanda.c@gmail.com'}
      this.setState({monsters:users}
      )
    })
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
// function App() {
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='Search Monster' handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters} />
    </div>
  )}
}
export default App;
