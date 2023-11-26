import PropTypes from "prop-types";
import "../style/Display.css"

function Display({ time, text }) {
  return (
    <div className="Display">
      <p className="Display-title">{text}</p>
      <p className="Display-time">{time}</p>
    </div>
  );
}

Display.propTypes = {
  time: PropTypes.string,
  text: PropTypes.string,
};

export default Display;
