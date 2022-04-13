import React from "react";

class Curriculo extends React.Component {
  render() {
    const { nome } = this.props.informação;
    return (
      <section>
        <h1> Curriculo </h1>
        <p>{ nome }</p>
      </section>
    )
  }
}

export default Curriculo;