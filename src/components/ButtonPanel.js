import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = ({ handleClick }) => (
  <>
    <div className="btnGroup">
      <Button button="AC" handleClick={handleClick} />
      <Button button="+/-" handleClick={handleClick} />
      <Button button="%" handleClick={handleClick} />
      <Button button="÷" handleClick={handleClick} />
    </div>

    <div className="btnGroup">
      <Button button="7" handleClick={handleClick} />
      <Button button="8" handleClick={handleClick} />
      <Button button="9" handleClick={handleClick} />
      <Button button="x" handleClick={handleClick} />
    </div>

    <div className="btnGroup">
      <Button button="4" handleClick={handleClick} />
      <Button button="5" handleClick={handleClick} />
      <Button button="6" handleClick={handleClick} />
      <Button button="-" handleClick={handleClick} />
    </div>

    <div className="btnGroup">
      <Button button="1" handleClick={handleClick} />
      <Button button="2" handleClick={handleClick} />
      <Button button="3" handleClick={handleClick} />
      <Button button="+" handleClick={handleClick} />
    </div>

    <div className="btnGroup">
      <Button button="0" handleClick={handleClick} />
      <Button button="." handleClick={handleClick} />
      <Button button="=" handleClick={handleClick} />
    </div>
  </>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
