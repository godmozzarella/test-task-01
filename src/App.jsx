import './styles/App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useEffect, useState } from 'react'

function App() {
  const [secondsLeft, setSecondsLeft] = useState(120)
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          setIsExpired(true) 
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='min-h-screen bg-[#232829]'>
      <Header secondsLeft={secondsLeft} isExpired={isExpired}/>
      <Main isExpired={isExpired}/>
    </div>
  )
}

export default App
