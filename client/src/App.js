import { Routes, Route, useLocation } from "react-router-dom"
import { Detail, Form, Home, LandingPage, Nav } from './components/index'
function App() {
  const location = useLocation()
  
  return (
    <div className="App">
      {location.pathname !== "/" &&  <Nav/>}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
