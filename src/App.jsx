import { BrowserRouter, Routes, Route } from "react-router-dom"
import Guest from './components/layouts/Guest'
import Admin from './components/auth/Admin'
import Login from './components/Login'

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
      </Routes>
    </BrowserRouter>
  );
}

export default App
