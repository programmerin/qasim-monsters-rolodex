import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  state = {
    users: [],
    searchField: "",
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          users,
        });
      });
  };

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const { users, searchField } = this.state;
    let filteredMonster = users.filter((user) =>
      user.name.toLowerCase().includes(searchField)
    );

    return this.state.users ? (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList monsters={filteredMonster} />
      </div>
    ) : (
      <h1>Fetching.....</h1>
    );
  }
}

export default App;
