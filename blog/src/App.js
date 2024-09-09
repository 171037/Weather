/* eslint-disable */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sky.png)`}}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
