import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About'

function App() {
  return (
    <BrowserRouter >
    <>
    <div className="App">
    <Header />
      <Routes >
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} exact />
      </Routes>
    </div>
    </>
    </BrowserRouter>
  );
}

export default App;


