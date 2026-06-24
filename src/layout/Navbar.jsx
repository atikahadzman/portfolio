import { useState, useEffect } from "react";
import { HiHome } from "react-icons/hi";   

export default function Navbar() {
    const urlLinkedin = import.meta.env.VITE_URL_LINKEDIN;
    const urlGithub = import.meta.env.VITE_URL_GITHUB;
    const appName = import.meta.env.VITE_APP_NAME;
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ["about", "experiences", "projects"];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActive(id);
                        return;
                    }
                }
            }
            setActive("home");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const links = [
        { label: "About", id: "about" },
        { label: "Experiences", id: "experiences" },
        { label: "Projects", id: "projects" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-black/10 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}>
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-start gap-8">
                <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
                    <span className="font-bold text-white text-lg tracking-wide group-hover:opacity-80 transition-opacity">
                        {appName}
                    </span>
                </button>

                <ul className="flex items-center gap-1">
                    {links.map(({ label, id }) => (
                        <li key={id}>
                            <button
                                onClick={() => scrollTo(id)}
                                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative
                                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white
                                    after:transition-all after:duration-200
                                    ${active === id
                                        ? "text-white after:w-full"
                                        : "text-white/70 hover:text-white after:w-0 hover:after:w-full"
                                    }`}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="max-w-5xl mx-auto flex items-center">
                    <a href={urlGithub} target="_blank" rel="noopener noreferrer"
                        className="px-6 py-3 text-sm font-medium transition-all duration-200 relative
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white
                            after:transition-all after:duration-200 text-white hover:translate-x-1 transition-transform hover:text-white/70 after:w-0 hover:after:w-full"
                    >
                        <img
                            src="/github-icon.png"
                            alt="Github"
                            className="h-5 w-5 md:h-5 md:w-5"
                            loading="lazy"
                        />
                    </a>

                    <a href={urlLinkedin} target="_blank" rel="noopener noreferrer"
                        className="px-6 py-3 text-sm font-medium transition-all duration-200 relative
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white
                            after:transition-all after:duration-200 text-white hover:translate-x-1 transition-transform hover:text-white/70 after:w-0 hover:after:w-full"
                    >
                        <img
                            src="/linkedin-icon.png"
                            alt="Linkedin"
                            className="h-5 w-5 md:h-5 md:w-5"
                            loading="lazy"
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
}