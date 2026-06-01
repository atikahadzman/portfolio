import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './layout/Navbar';
import About from './About';
import Banner from './Banner';
import Experiences from './Experiences';
import Projects from './Projects';
import Footer from './Footer';

function App() {
    return (
    <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
            <section className="mb-20">
                <Banner />
            </section>

            <section className="mb-20">
                <About />
            </section>

            <section className="mb-20">
                <Experiences />
            </section>

            <section className="mb-20">
                <Projects />
            </section>
        </main>

        <footer className="mt-5 mb-10">
            <Footer />
        </footer>
    </div>
  );
}

export default App;
