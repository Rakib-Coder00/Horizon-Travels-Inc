import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home/Home';
import Login from './Components/Auth/Login/Login';
import Services from './Components/Home/Services/Services';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Signup from './Components/Auth/Signup/Signup';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Checkout from './Components/Checkout/Checkout';
import About from './Components/About/About';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <>
      <Header/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route 
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
