import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Home } from './Home'
import { About } from './About'
import { File } from './File'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/about">소개</Link></li>
          <li><Link to="/file">파일</Link></li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/file" element={<File />} />
      </Routes>
    </div>
  )
}

export default App
