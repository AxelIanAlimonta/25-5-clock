import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import TimeSeter from "./components/TimeSeter";
import { FaPlay, FaPause } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { useEffect } from "react";
import { useRef } from "react";
import { converter } from "./js/numberToTimeConverter.js";
import beep from "./audio/boshigatounshauyo.mp3";

function App() {
  const [breakTimer, setBreakTimer] = useState(300);
  const [sessionTimer, setSessionTimer] = useState(1500);
  const [timer, setTimer] = useState(1500);
  const [timerON, setTimerON] = useState(false);
  const [isSessionTime, setIsSessionTime] = useState(true);

  console.log(beep);
  let interval = useRef();
  let audio = useRef(new Audio(beep));

  useEffect(() => {
    if (timerON) {
      interval.current = setInterval(() => {
        setTimer((e) => {
          if (e == 1) audio.current.play();
          if (e == 0) {
            setIsSessionTime(!isSessionTime);
            console.log(isSessionTime);
            return isSessionTime ? breakTimer : sessionTimer;
          }
          return e - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [timerON, isSessionTime, breakTimer, sessionTimer]);

  useEffect(() => {
    setTimer(sessionTimer);
    setIsSessionTime(true);
  }, [sessionTimer, breakTimer]);

  function pauseTimer() {
    setTimerON(false);
  }

  function initTimer() {
    setTimerON(true);
  }

  function resetTimer() {
    audio.play();
    pauseTimer();
    setTimer(sessionTimer);
  }

  function changeTimer(seconds, callback) {
    callback((e) => {
      return e + seconds < 60 ? e : e + seconds;
    });
  }

  return (
    <div className="timer255">
      <div className="setersContainer">
        <TimeSeter
          changeTimer={changeTimer}
          changeTimerCallback={setSessionTimer}
          time={sessionTimer / 60}
          title="Session Lenght"
        />
        <TimeSeter
          changeTimer={changeTimer}
          changeTimerCallback={setBreakTimer}
          time={breakTimer / 60}
          title="Break Lenght"
        />
      </div>
      <Display
        time={converter(timer)}
        text={isSessionTime ? "Session" : "Break"}
      />
      <div className="Control">
        <FaPlay onClick={initTimer} className="Control-btn btn" />
        <FaPause onClick={pauseTimer} className="Control-btn btn" />
        <TbReload onClick={resetTimer} className="Control-btn btn" />
      </div>
    </div>
  );
}

export default App;
