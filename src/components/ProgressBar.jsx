import React,{useState,useEffect} from 'react'
const TIMER  =5000;
const ProgressBar = () => {
    const [remainingtime, setRemainigTime] = useState(TIMER);
    useEffect(() => {
     const interval = setInterval(() => {
        setRemainigTime((prevTime) => prevTime - 10);
      }, 10);
  
      return ()=> {
        clearInterval(interval);
      }
    }, []);
  return (
    <progress  value={remainingtime} max={TIMER} />
  )
}

export default ProgressBar