import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import Signup from './component/Signup';
import Signin from './component/Signin';
import DashBoard from './component/Dashboard';
import Send from './component/Send';
import Main from './component/main';

function App() {

  return (
    <BrowserRouter>
        <Toaster/>
    <Routes>
    <Route path='/' element={<Main/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/dashboard' element={<DashBoard/>}></Route>
      <Route path='/send' element={<Send/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
