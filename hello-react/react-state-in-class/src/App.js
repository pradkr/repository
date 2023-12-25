import React, {Component} from "react";
import Item from "./Item";

class App extends Component {
  state = {
    items:[]
  }
  add = e => {
    if (e.keyCode === 13) {
      // When the enter key is pressed
      // Update the state with the new item
      this.setState({items:[...this.state.items,{name:e.target.value, id: new Date().getTime()}]})
      e.target.value = "";
    }
  };
  render() {
    return (
      <div className="app">
        <div className="input-holder">
          <input
            placeholder="Type an item and press enter"
            onKeyUp={this.add}
          />
        </div>
        <div className="items-holder">
          {this.state.items.map(i=>(
            <Item name={i.name} key={i.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
