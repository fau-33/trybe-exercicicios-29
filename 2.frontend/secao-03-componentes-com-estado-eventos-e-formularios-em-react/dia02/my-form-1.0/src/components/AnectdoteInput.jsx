import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnecdoteInput extends Component {
  render() {
    const { anecdote, handleChange } = this.props;

    return (
      <label htmlFor="anecdote">
        Anedota:
        <textarea
          id="anecdote"
          name="anecdote"
          onChange={ handleChange }
          value={ anecdote }
        />
        { !anecdote ? 'o nome precisa ser preenchido': ''}
      </label>
    );
  }
}

AnecdoteInput.propTypes = {
  anecdote: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AnecdoteInput;