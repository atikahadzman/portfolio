import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './layout/Navbar';
import Banner from './Banner';
import Experiences from './Experiences';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

        <main className="flex-1 flex items-center justify-center">
            <Banner />
        </main>

        <main className="flex-1 flex items-center justify-center">
            <Experiences />
        </main>
    </div>
  );
}

export default App;
