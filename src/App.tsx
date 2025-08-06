import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { HomePage } from '@/pages/home'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 dark flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  )
}

export default App
