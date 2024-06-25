import { useEffect, useState } from "react";
const TIMER = 5000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingtime, setRemainigTime] = useState(TIMER);
  useEffect(() => {
   const interval = setInterval(() => {
      setRemainigTime((prevTime) => prevTime - 10);
    }, 10);

    return ()=> {
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);
    return () => {
      console.log("Clean up timer");
      clearTimeout(timer);
    };
  }, [onConfirm]);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingtime} max={TIMER} />
    </div>
  );
}
