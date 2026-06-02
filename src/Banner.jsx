import { useState } from "react";

export default function Banner() {
    const urlEmail = import.meta.env.VITE_URL_EMAIL;
    const urlLinkedin = import.meta.env.VITE_URL_LINKEDIN;
    const urlGithub = import.meta.env.VITE_URL_GITHUB;
    const appName = import.meta.env.VITE_APP_NAME;

    return (
        <div className="flex flex-col md:flex-row gap-8 p-4 items-center">
            {/* avatar */}
            <div className="shrink-0">
                <img
                    src="/avatar-1.jpg"
                    alt="It's Me!"
                    className="h-48 w-36 md:h-80 md:w-64 rounded-4xl object-cover"
                    loading="lazy"
                />
            </div>

            {/* description */}
            <div className="flex flex-col gap-1 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-poppins font-bold">
                    Hi there, <span className="text-[#12AFEA]">{appName}</span> here
                </h1>

                <p className="text-white mb-6 mt-6 text-sm md:text-base font-poppins pt-4">
                    I've been wrangling code for 6+ years — mostly PHP (yes, by choice 🙃). I build web apps
                    that actually scale, REST APIs that don't REST too much, and somehow always manage to ship
                    on time even when the deadline was "yesterday". I've integrated enough third-party services
                    and payment gateways to know that their docs are always lying.
                </p>

                <div className="flex items-center justify-center md:justify-start gap-2 pt-4">
                    <a href={urlEmail}
                        className="font-poppins border-2 border-white text-white px-6 py-3 hover:bg-white hover:text-blue-600 transition"
                    >
                        Send Email
                    </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 pt-4">
                    <a href={urlGithub} target="_blank" rel="noopener noreferrer"
                        className="md:hidden px-6 text-sm font-medium transition-all duration-200 relative
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white
                            after:transition-all after:duration-200 text-white hover:translate-x-1 transition-transform hover:text-white/70 after:w-0 hover:after:w-full"
                    >
                        <img
                            src="/github-icon.png"
                            alt="It's Me!"
                            className="h-5 w-5 md:h-5 md:w-5"
                            loading="lazy"
                        />
                    </a>

                    <a href={urlLinkedin} target="_blank" rel="noopener noreferrer"
                        className="md:hidden px-6 text-sm font-medium transition-all duration-200 relative
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white
                            after:transition-all after:duration-200 text-white hover:translate-x-1 transition-transform hover:text-white/70 after:w-0 hover:after:w-full"
                    >
                        <img
                            src="/linkedin-icon.png"
                            alt="It's Me!"
                            className="h-5 w-5 md:h-5 md:w-5"
                            loading="lazy"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}