import './App.css'
import Footer from './components/Footer'
import Manager from './components/Manager'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
    <Navbar/>
    <div className="bg-green-50 bg-[linear-gradient(to_right,#affbbb,transparent_1px),linear-gradient(to_bottom,#affbbb,transparent_1px)] bg-[size:6rem_4rem]">
      <div className='bg-[radial-gradient(circle_800px_at_100%_200px,#a0cfa3,transparent)]'>
        <Manager/>
      </div>
    </div>
    <Footer/>
    </>
  )
}
export default App