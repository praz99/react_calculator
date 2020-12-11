import PropTypes from 'prop-types';

const Button = props => {
  const { button } = props;
  return (
    <button type="button">{ button }</button>
  );
};

Button.propTypes = {
  button: PropTypes.string.isRequired,
};

export default Button;
