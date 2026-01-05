import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Vendas from './pages/Vendas'
import Corretores from './pages/Corretores'
import Imoveis from './pages/Imoveis'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/corretores" element={<Corretores />} />
          <Route path="/imoveis" element={<Imoveis />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
