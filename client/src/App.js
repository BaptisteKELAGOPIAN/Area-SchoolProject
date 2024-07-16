import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Login";
import Dashboard from "./dashboard";

//axios post request




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App