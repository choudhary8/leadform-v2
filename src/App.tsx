import './App.css'
import { CustomerForm } from './components/CustomerForm'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className='sm:h-full'>
      <Navbar></Navbar>
      <div className='sm:h-[91%]'>
        <CustomerForm></CustomerForm>
      </div>
    </div>
  )
}

export default App
