import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import './css/Post.css';
import './css/index.css';
import App from './App';
import Post from './Post';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
    <h1>Hello</h1>
    <App />
    <Post />
    </div>
  </React.StrictMode>
);

//ReactDOM.render(<Post />, document.getElementById('root'));

//ReactDOM.render(<h1>Hello/</h1>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
