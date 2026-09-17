import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="brand" to="/users">OctoFit <span>Tracker</span></NavLink>
        <nav aria-label="Primary navigation">
          {[
            ['users', 'People'],
            ['activities', 'Activity'],
            ['teams', 'Teams'],
            ['leaderboard', 'Leaderboard'],
            ['workouts', 'Workouts'],
          ].map(([path, label]) => <NavLink key={path} to={`/${path}`}>{label}</NavLink>)}
        </nav>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Navigate to="/users" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
