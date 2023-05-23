import React, { useState } from "react";

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState('');


  return(
    <form>
      <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor="name">
          Nome completo
          <input
            type="text"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <br />
        <label htmlFor="age">
          Idade
          <input
            type="number"
            id="age"
            value={age}
            onChange={({ target }) => setAge(target.value)}
          />
        </label>
        <br />
        <label htmlFor="city">
          Cidade/UF
          <input
            type="text"
            id="city"
            value={location}
            onChange={({ target }) => setLocation(target.value)}
          />
        </label>
        <br />
      </fieldset>
      <fieldset>
        <legend>Módulos</legend>
        <label htmlFor="fundamentals">
          Fundamentos
          <input 
            type="radio" 
            name="module" 
            id="fundamentals"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({target}) => setModule(target.value) }
           />
        </label>
        <br />
        <label htmlFor="frontend">
          Front-end
          <input 
            type="radio" 
            name="module" 
            id="frontend"
            value="Front-end"
            checked={module === 'Front-end'}
            onChange={({target}) => setModule(target.value) }
           />
        </label>
        <br />
        <label htmlFor="backend">
          Back-end
          <input 
            type="radio" 
            name="module" 
            id="backend"
            value="Back-end"
            checked={module === 'Back-end'}
            onChange={({target}) => setModule(target.value) }
           />
        </label>
        <br />
        <label htmlFor="cs">
          Ciência da computação
          <input 
            type="radio" 
            name="module" 
            id="cs"
            value="Ciência da computação"
            checked={module === 'Ciẽncia da computação'}
            onChange={({target}) => setModule(target.value) }
           />
        </label>
      </fieldset>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log('Click');  
        }}

      >
        Enviar
      </button>
    </form>
  );
}

export default Form;