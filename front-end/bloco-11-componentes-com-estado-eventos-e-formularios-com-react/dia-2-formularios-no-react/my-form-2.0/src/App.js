import './App.css';
import Form from './Componentes/Form';
import React from 'react';
import Curriculo from './Componentes/Curriculo';

class App extends React.Component {
  constructor() {
    super()

    this.dados = this.dados.bind(this);

    this.state = {
      nome: '',
    }
  }
  dados(informação) {
    const { nome } = informação;
    this.setState({
      nome: nome,
    })
  }
  render() {
    return (
      <div className="App">
        <Form info={ this.dados }/>
        <Curriculo informação={this.state} />
      </div>
    );
  }
  
}

export default App;
