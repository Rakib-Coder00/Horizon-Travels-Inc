import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
