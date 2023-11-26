import PropTypes from "prop-types";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "../style/TimeSeter.css";

function TimeSeter({ title, time, changeTimerCallback, changeTimer }) {
  return (
    <div className="TimeSeter">
      <p className="TimeSeter-title">{title}</p>
      <div className="TimeSeter-btnsContainer">
        <FaArrowDown
          className="btn"
          onClick={() => changeTimer(-60, changeTimerCallback)}
        />
        <p className="TimeSeter-time">{time}</p>
        <FaArrowUp
          className="btn"
          onClick={() => changeTimer(60, changeTimerCallback)}
        />
      </div>
    </div>
  );
}

TimeSeter.propTypes = {
  title: PropTypes.string,
  time: PropTypes.number,
  changeTimerCallback: PropTypes.func,
  changeTimer: PropTypes.func,
};

export default TimeSeter;
