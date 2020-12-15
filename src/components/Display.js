import PropTypes from 'prop-types';

const Display = props => {
  const { result, next } = props;
  if (next) {
    return (
      <p>{ next }</p>
    );
  }
  return (
    <p>{ result }</p>
  );
};

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  next: null,
};

export default Display;
