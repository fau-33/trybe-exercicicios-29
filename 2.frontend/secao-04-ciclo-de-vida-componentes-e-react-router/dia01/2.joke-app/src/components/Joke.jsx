import React from "react";

class Joke extends React.Component {
  render() {
    const { jakeObj, saveJoke} = this.props;
    
    return(
      <div>
        <p>{jakeObj.joke}</p>
        <button type="button" onClick={saveJoke}>
            Salvar Piada!
        </button>
      </div>
    );
  }
}

export default Joke;