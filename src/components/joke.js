import React, { Component } from 'react';
// import propTypes from 'prop-types';
import getJokes from '../helpers/data/jokeData';
import jokeFormat from './jokeFormat';

class JokeGen extends Component {
   state = {
     joke: [],
   }

   componentDidMount() {
     getJokes().then((response) => {
       this.setState({
         joke: response,
       });
     });
   }

   render() {
     const { joke } = this.state;
     const renderJokeToDom = () => (
        <jokeFormat key={joke.id} joke={joke} />
     );

     return (
         <div className='OneJoke'>
            <button type="button" id="press4Joke" className="btn btn-success"></button>
         </div>
     );
   }
}

export default JokeGen;
