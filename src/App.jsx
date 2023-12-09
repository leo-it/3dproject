import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './app/screens/Home';
import Shenga from "./app/screens/Shenga";

const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shenga" element={<Shenga />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
