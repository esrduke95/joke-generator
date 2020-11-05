import React, { Component } from 'react';
import jokeFormat from '../helpers/data/jokeData';

class OneJoke extends Component {
    static propTypes = {
      joke: jokeFormat,
    };

    render() {
      const { joke } = this.props;
      return (
          <p className="setupText">{joke.setup}</p>
      );
    }
}

export default OneJoke;
