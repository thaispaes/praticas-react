import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './src/pages/Home'
import Fotos from './src/pages/Imagem'

function App() {
    return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photos" element={<Fotos />} />
          </Routes>
      </Router>
    );

}

export default App;