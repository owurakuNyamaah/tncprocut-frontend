import { BrowserRouter, Routes, Route } from "react-router-dom"
import Guest from './components/layouts/Guest'
import Admin from './components/auth/Admin'
import Login from './components/Login'
import Invoices from "./components/Invoices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Guest />} />
        {/* <Route path="/quote" element={<Quote />} /> */}
        <Route path="/login" element={<Login />} />

        {/* Protected */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
