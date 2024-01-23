import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./pages/Home";
// import Home from "./pages/Home";
import './App.css'
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
