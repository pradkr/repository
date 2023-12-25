class MyApp extends React.Component {
    constructor() {
      super();
      this.state = {
        txt: ""
      };
    }
    render() {
      return (
        <div>
          <div className="top">
            <input
              type="text"
              id="inputFld"
              onChange={e => this.setState({ txt: e.target.value })}
            />
          </div>
          <div className="bottom">
            <span className="output">
              {this.state.txt
                .split("")
                .reverse()
                .join("")}
            </span>
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<MyApp />, document.getElementById("app"));