import Login from './views/login/Login'
import SignUp from './views/signup/SignUp'
import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom";
import DashBoard from './views/dashboard/DashBoard';
const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/signup' element={ <SignUp/>} />
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
      {/* <Login /> */}
      {/* <SignUp/> */}
    </div>
  )
}

export default App