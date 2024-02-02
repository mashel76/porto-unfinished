import Ani from './components/Ani'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
        <div className='bg-gambar w-full h-screen px-72 py-28 flex'>
          <Navbar />
          <Ani />
        </div>
    </>
  )
}

export default App
