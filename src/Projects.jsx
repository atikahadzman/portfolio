import React, { useEffect, useState } from "react";
import { HiArrowRight, HiAtSymbol, HiOutlineMinusSm, HiOutlineChevronRight } from "react-icons/hi"; 

export default function Projects() {
    const urlLinkedin = import.meta.env.VITE_URL_LINKEDIN;
    const urlGithub = import.meta.env.VITE_URL_GITHUB;
    const urlProjectOne = import.meta.env.VITE_URL_EBOOK_APP;
    const urlProjectTwo = import.meta.env.VITE_URL_PORFOLIO_APP;

    const projects = [
        {
            id: "1",
            url: urlProjectOne,
            title: "Track reading ebook progress",
            image: "/ebook.PNG", 
            badges: (
                <>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">Laravel</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">MySQL</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">React</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">Tailwind.css</div>
                </>
            ),
            content: "This is a system for tracking reading progress. You can upload (in PDF format), search and filter ebooks and track your reading progress."
        },
        {
            id: "2",
            url: urlProjectTwo,
            title: "Portfolio",
            image: "/portfolio.PNG",
            badges: (
                <>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">React</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">Tailwind.css</div>
                </>
            ),
            content: "A landing page for porfolio. Builded using React and Tailwind."
        },
    ];

    return (
        <div className="flex flex-col gap-8 p-4 w-full">
            {/* title */}
            <div className="flex items-center gap-4">
                <h1 className="font-poppins font-bold">
                    Recent Projects
                </h1>
                <div className="w-24 md:w-48 lg:flex-1 h-px bg-white/20" />
            </div>

            {/* list of projects */}
            <div className="flex flex-col gap-1 text-center md:text-left">
                {projects.map((item) => (
                    <div className="flex flex-col gap-6 mb-5 p-2">
                        <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
                            <div className="shrink-0">
                                <a href={item.url}>
                                    {/* mobile */}
                                    <img 
                                        src={item.image}
                                        className="block md:hidden w-full object-cover rounded-2xl hover:translate-x-1 transition-transform" 
                                        alt={item.title}
                                        loading="lazy"
                                    />

                                    {/* desktop */}
                                    <img 
                                        src={item.image}
                                        className="hidden md:block w-50 h-64 object-cover rounded-2xl p-2 hover:translate-x-1 transition-transform"
                                        alt={item.title}
                                        loading="lazy"
                                    />

                                </a>
                            </div>

                            <div>
                                <div className="flex flex-col items-center gap-y-2 md:flex-row">
                                    <a className="hover:text-cyan-400" href={item.url}>
                                        <div className="text-xl font-semibold text-white hover:translate-x-1 transition-transform mb-2">
                                            {item.title}
                                        </div>
                                    </a>
                                    <div className="ml-3 flex flex-wrap gap-2">
                                        {item.badges}
                                    </div>
                                </div>
                                <p className="mt-3 text-white">
                                    {item.content}
                                </p>
                            </div>

                        </div>
                    </div>
                 ))}
            </div>
        </div>
    );
}