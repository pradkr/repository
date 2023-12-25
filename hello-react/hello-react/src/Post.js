import React, { Component } from "react";
import "./css/Post.css";

// Create a class component here
class Post extends Component {
    state = {
        text: ""    
      };
    render() {
      return (
        <div className="app">
          <textarea id="text-area" onChange={e => this.setState({ text: e.target.value })}/>
          <div className="char-word-count">
          <div id="char-count">{this.state.text.length} character(s)</div>
          <div id="word-count">{this.state.text ? this.state.text.match(/\w+/gim).length : 0} word(s)</div>
          </div>
        </div>
      );
    }
}

export default Post;
