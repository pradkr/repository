import React, { Component } from "react";
import SongCard from "./components/SongCard";
import songs from "./services/songs";

class App extends Component {
    state = {
        songs
    }
    sortByTitle = () => {
        this.setState({
            songs: [...this.state.songs.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)] 
        })     
    }
    sortByRating = () => {
        this.setState({
          songs:  [...this.state.songs.sort((a, b) => b.rating - a.rating) ]
        })
    }
  render() {
    return (
      <div id="super-tunes">
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        <button className="st-btn" onClick={this.sortByTitle} >Sort By Title</button> 
        <button className="st-btn" onClick={this.sortByRating} >Sort By Rating</button>
        <div id="song-list"> 
        { this.state.songs.map(song => (<SongCard key={song.id} data={song} />))}
        </div>
      </div>
    );
  }
}

export default App;
