import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({
  button, handleClick, wide, color,
}) => (
  <button
    className="button"
    type="button"
    style={{
      width: wide ? '50%' : '25%',
      backgroundColor: color,
    }}
    onClick={() => handleClick(button)}
  >
    { button }
  </button>
);

Button.propTypes = {
  button: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  color: '#E0E0E0',
};

export default Button;
