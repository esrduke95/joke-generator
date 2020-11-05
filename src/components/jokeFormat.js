import propTypes from 'prop-types';

const jokeFormat = propTypes.shape({
  setup: propTypes.string.isRequired,
  punchline: propTypes.string.isRequired,
});

export default jokeFormat;
