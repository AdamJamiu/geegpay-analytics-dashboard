import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layout/Home";
// import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import './App.css'

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
