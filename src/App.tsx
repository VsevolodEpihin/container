import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './Loader';

const Header = React.lazy(() => import('header/Header'));
const Settings = React.lazy(() => import('settings/Settings'));
const Video = React.lazy(() => import('video/Video'));
const Home = React.lazy(() => import('home/Home'))

const App = () => (
  <Router>
    <React.Suspense>
      <Header />
    </React.Suspense>
    <Routes>
      <Route path='/' element={<React.Suspense fallback={<Loader />}><Home /></React.Suspense>} />
      <Route path='/videos' element={<React.Suspense fallback={<Loader />}><Video /></React.Suspense>}/>
      <Route path='/settings' element={<React.Suspense fallback={<Loader />}><Settings /></React.Suspense>} />
    </Routes>
  </Router>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)