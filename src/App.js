import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home/Home';
import Login from './Components/Auth/Login/Login';
import Services from './Components/Home/Services/Services';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
