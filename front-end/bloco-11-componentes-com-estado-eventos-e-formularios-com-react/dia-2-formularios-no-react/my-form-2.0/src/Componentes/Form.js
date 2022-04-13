import React from 'react';

class Form extends React.Component {
  constructor() {
    super()

    this.pegaInfo = this.pegaInfo.bind(this);
    this.envio = this.envio.bind(this);

    this.state = {
      nome: '',
    };
  }

  pegaInfo({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  envio(event) {
    event.preventDefault();
    
    // é aqui embaixo
    const { info } = this.props;
    info(this.state);
  }

  render() {
    return (
      <form onSubmit={this.envio}>
      <fieldset>
        <label>
          Nome
          <input type={'text'} name='nome' value={this.state.nome} onChange={this.pegaInfo} />
        </label>
        <label>
          Email
          <input type={'text'} />
        </label>
        <label>
          CPF
          <input type={'text'} />
        </label>
        <label>
          Endereço
          <input type={'text'} />
        </label>
        <label>
          Cidade
          <input type={'text'} />
        </label>
        <label>
          Estado
          <select>
          <option>SP</option>
          <option>MG</option>
          <option>RJ</option>
        </select>
        </label> 
        <label>
          Tipo
          <input type={'radio'} /> Casa
          <input type={'radio'} /> Apartamento
        </label>
      </fieldset>
      <fieldset>
      <label>
        Resumo do Curriculo
        <textarea></textarea>
      </label>
      <label>
        Cargo
        <textarea></textarea>
      </label>
      <label>
        Descrição do Cargo
        <textarea></textarea>
      </label>
      </fieldset>
      <button type='submit'>Enviar</button>
      </form>
    )
  }
}

export default Form;