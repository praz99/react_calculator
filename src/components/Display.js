import PropTypes from 'prop-types';

export default function Display(props) {
  const { result } = props;
  return (
    <p>{ result }</p>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 0,
};
