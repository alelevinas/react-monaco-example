import React from 'react';
import SplitPane from 'react-split-pane';
import logo from './logo.svg';
import './App.css';
import SimpleTypescriptEditor from './SimpleTypescriptEditor';
import MarkdownContainer from './MarkdownContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: '',
      editorWidth: "100%"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  //https://localhost:3001
  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`, { credentials: 'include' })
      .then(response => response.json())
      .then(state => this.setState(state));
  }


  handleDrag(width) {
    console.log(width);
    this.setState({ editorWidth: width });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Ejemplo de pantalla con editor + enunciado</h2>
        </header>
        <SplitPane split="vertical" defaultSize="50%" onChange={this.handleDrag}>
          <SimpleTypescriptEditor
            width={this.state.editorWidth} />
          <div>
            <h1>El enunciado del ejercicio es el siguiente:</h1>

            <MarkdownContainer />
            <p>Sumar dos enteros</p>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Enter your name: </label>
              <input
                id="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>
            <p>{this.state.greeting}</p>
          </div>
        </SplitPane>
      </div>
    );
  };
};

export default App;
