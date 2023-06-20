import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  //   if (minutes <= 10) minutes = "0" + minutes;
  //   if (seconds <= 10) seconds = "0" + seconds;
  return minutes + " minutes " + seconds + " seconds";
};

export default function CountDown({ seconds }) {
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef;

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  });

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      Swal.fire({
        icon: "error",
        title: "Booking Expired",
        html: "The time available to confirm this booking has now expired.When you click OK,you will be returned the Booking Details Screen and if the slot you wish to book is still available, the timer will restart and you will be able to attempt to complete your booking again.<br><br>If the time slot is no longer available,you will be informed and returned to the book tee times screen to select another time.",

        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  });
  return <p>You have {formatTime(countdown)} to complete your booking</p>;
}
