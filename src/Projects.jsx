import React, { useEffect, useState } from "react";
import { HiArrowRight, HiAtSymbol, HiOutlineMinusSm, HiOutlineChevronRight } from "react-icons/hi"; 

export default function Projects() {
    const urlLinkedin = import.meta.env.VITE_URL_LINKEDIN;
    const urlGithub = import.meta.env.VITE_URL_GITHUB;

    const projectUrls = {
        electron: import.meta.env.VITE_URL_ELECTRON_APP,
        ebook: import.meta.env.VITE_URL_EBOOK_APP,
        chart: import.meta.env.VITE_URL_CHART_APP,
        portfolio: import.meta.env.VITE_URL_PORFOLIO_APP,
        chartApi: import.meta.env.VITE_URL_CHART_API_APP,
        ecommerceWeb: import.meta.env.VITE_URL_ECOMMERCE_WEB,
        patientManagement: import.meta.env.VITE_URL_PATIENT_MANAGEMENT_APP,
    };

    const projectList = [
        {
            url: projectUrls.patientManagement,
            title: "Patient Management",
            image: "/patient-management.PNG",
             badges: (
                <>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">React</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">Tailwind.css</div>
                </>
            ),
            content: "A responsive UI for patient management system. Builded using React + Vite and Tailwind."
        },
        {
            url: projectUrls.ebook,
            title: "Ebook App",
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
            url: projectUrls.chart,
            title: "Chart App",
            image: "/angular-chart.PNG",
            badges: (
                <>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">Angular</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">HTML</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-cyan-400 text-cyan-900">CSS</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">MySQL</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">Node.js</div>
                </>
            ),
            content: (
            <>
                A responsive dashboard application using Angular for the frontend and Node.js for the backend, featuring interactive charts, tabular data, and RESTful API integration.
                {' '}
                <a
                    href={projectUrls.chartApi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                Refer here
                </a>
                {' '}
                for the backend of this app.
            </>
            )
        },
        {
            url: projectUrls.electron,
            title: "Electron application using PouchDb",
            image: "/electron-chart.PNG",
            badges: (
                <>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">Electron</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">PouchDb</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">HTML</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-cyan-400 text-cyan-900">CSS</div>
                </>
            ),
            content: "An Electron application that uses PouchDB for data validation and displays charts and tables. Built with Electron, PouchDB, HTML, and CSS."
        },
        {
            url: projectUrls.ecommerceWeb,
            title: "Wordpress E-commerce website using WooCommerce",
            image: "/e-commerce.PNG",
            badges: (
                <>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">Wordpress</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">WooCommerce</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">MySQL</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">Adobe Illustrator</div>
                </>
            ),
            content: "A responsive skincare e-commerce website built with WordPress and WooCommerce, featuring custom-designed and edited visuals created in Adobe Illustrator."
        },
        {
            url: projectUrls.portfolio,
            title: "Portfolio App",
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

    const projects = projectList.map((p, index) => ({
        id: String(index + 1),
        ...p
    }));

    return (
        <div className="flex flex-col gap-8 p-4 w-full">
            {/* title */}
            <div className="flex items-center gap-4">
                <h1 className="font-mono font-bold">
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
                                        <div className="font-mono text-xl font-semibold text-white hover:translate-x-1 transition-transform mb-2">
                                            {item.title}
                                        </div>
                                    </a>
                                    <div className="font-mono ml-3 flex flex-wrap gap-2">
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