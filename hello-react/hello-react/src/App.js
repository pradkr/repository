import React, {Component} from 'react';

class MyApp extends Component {
    state = {
        txt : ""
    }
    render(){

        return (
        <div id="app">
            <div className = "top">
                <input type="text" id="InputFld" 
                onChange={ e => this.setState({txt:e.target.value}) } />
            </div>
            <div className = "bottom">
                <span className='output'>{this.state.txt.split("").reverse().join("")}</span>
            </div>     
        </div>    
        )
    }
}

export default MyApp;