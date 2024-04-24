import { useState,useEffect } from "react";


export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [timerId, setTimerId] = useState(null)
  // let timerId = setInterval(() => console.log('count'), 1000)
  // clearInterval(timerId)

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1)
      }, 1000)
      setTimerId(id)
    } else {
      if (timerId !== null) {
        clearInterval(timerId)
      }
    }
    return () => {
      if (timerId !== null) {
        clearInterval(timerId)
      }
    }
  }, [isRunning])

  const handleStartTimer = () => {
    setIsRunning(true)
  }

  const handleStopTimer = () => {
    setIsRunning(false)
  }

  const handleResetTimer = () => {
    setIsRunning(false)
    setTimeElapsed(0)
  }

  return (
    <div className='p-12 mx-auto space-y-4 max-w-[300px]'>
      <div className='font-bold text-center text-3xl'>Zamanlayıcı: {timeElapsed}s</div>
      <div className='flex justify-between'>
      {isRunning ? (
          <button className='text-amber-500 font-bold' onClick={handleStopTimer}>Durdur</button>
        ) : (
          <button className='text-green-500 font-bold' onClick={handleStartTimer}>Başlat</button>
        )}
        <button className='text-red-500 font-bold' onClick={handleResetTimer}>Sıfırla</button>
      </div>
    </div>
  )
}
