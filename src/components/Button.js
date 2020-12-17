import PropTypes from 'prop-types';

const Button = ({ button, handleClick }) => (
  <button type="button" onClick={() => handleClick(button)}>{ button }</button>
);

Button.propTypes = {
  button: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
