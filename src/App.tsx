import Ani from './components/Ani'
import Navbar from './components/Navbar'
import Muter from './components/Muter'
import { useState, useEffect } from 'react';

function App() {
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    // Hide the div after 5 seconds
    const timeoutId = setTimeout(() => {
      setShowDiv(false);
    }, 2000); // 5000 milliseconds (5 seconds)

    // Clear the timeout to prevent it from running if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
    <div>
      {showDiv && (
        <div className='z-10 animate-fa bg-teal-500 w-full h-full absolute items-center justify-center flex'>
          <Muter />
        </div>
      )}
    </div>
      <div className='bg-gambar w-full h-screen px-72 py-28 flex'>
        <Navbar />
        <Ani />
      </div>
    </>
  )
}

export default App
