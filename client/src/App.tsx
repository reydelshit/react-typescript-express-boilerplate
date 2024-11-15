import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Article from './pages/Article'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Layout1 from './pages/root/Layout1'
import Layout2 from './pages/root/Layout2'

function App() {


  return (
    <div>
      <h1>Hello React typescript + shadcn + tailwind + node express typescript </h1>
      <Link to="/">Dashboard</Link>
      <Link to="/articles/foo">Article</Link>
      <Routes>
        <Route element={<Layout1 />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route element={<Layout2 />}>
          <Route path="/articles/:slug" element={<Article />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
