import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = ({ result }) => (
  <p className="show-result">{ result }</p>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
