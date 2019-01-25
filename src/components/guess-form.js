import React from 'react';
import { connect } from 'react-redux';
import { makeGuess } from '../actions';

import './guess-form.css';

export class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ''
    }

    this.setTextInput = this.setTextInput.bind(this);
    this.onSubimt = this.onSubmit.bind(this);
  }
  
  setTextInput(event) {
    this.setState({ textInput: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    const guess = this.state.textInput;
    
    this.props.dispatch(makeGuess(guess));
    this.setState({ textInput: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubimt}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          value={this.state.textInput}
          onChange={this.setTextInput}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

export default connect()(GuessForm);