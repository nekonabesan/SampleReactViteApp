import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './Home';
import SampleForm from './SampleForm';
import Generateai from './Generateai';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SampleForm' element={<SampleForm />} />
        <Route path='/Generateai' element={<Generateai />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;