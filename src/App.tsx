import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LanguageProvider } from './i18n/LanguageContext'
import { SchoolStory } from './pages/SchoolStory'
import { Academics } from './pages/Academics'
import { Campus } from './pages/Campus'
import { History, Achievements } from './pages/Heritage'
import { Home } from './pages/Home'
import { LiveStream } from './pages/LiveStream'
import { StarsOfExcellence } from './pages/StarsOfExcellence'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={basename === '/' ? undefined : basename}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="history" element={<History />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="about" element={<SchoolStory />} />
            <Route path="stars" element={<StarsOfExcellence />} />
            <Route path="live" element={<LiveStream />} />
            <Route path="academics" element={<Academics />} />
            <Route path="campus" element={<Campus />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
