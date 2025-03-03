import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from './Context/UserContext';
import { ProfileProvider } from './Context/ProfileContext';
import { AppearanceProvider } from './Context/AppearanceContext';
import Home from './pages/home'
import Login from './pages/Login'
import Aboutuser from './pages/Aboutuser'
import Register from './pages/register'
import Links from './pages/Links'
import Appearance from './pages/Appearance'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import { AnalyticsProvider } from './Context/AnalyticsContext';



const App = () => {
  return (
    <AnalyticsProvider>
      <AppearanceProvider>
        <ProfileProvider>
          <UserProvider>

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/aboutuser" element={<Aboutuser />} />
                <Route path="/Links" element={<Links />} />
                <Route path="/Appearance" element={<Appearance />} />
                <Route path="/Analytics" element={<Analytics />} />
                <Route path="/Settings" element={<Settings />} />


              </Routes>
            </BrowserRouter>

          </UserProvider>
        </ProfileProvider>
      </AppearanceProvider>
    </AnalyticsProvider>



  )
}

export default App