import React, { useEffect, useState } from "react";
import { HiArrowRight, HiAtSymbol, HiOutlineMinusSm, HiOutlineChevronRight } from "react-icons/hi"; 
import ScreenshotProjects from './ScreenshotProjects';

export default function Projects() {
    const urlLinkedin = import.meta.env.VITE_URL_LINKEDIN;
    const urlGithub = import.meta.env.VITE_URL_GITHUB;
    const [currentPage, setCurrentPage] = useState(1);

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
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">CSS</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">MySQL</div>
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
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">CSS</div>
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
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">React</div>
                    <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">Tailwind.css</div>
                </>
            ),
            content: "A landing page for porfolio. Builded using React and Tailwind."
        },
    ];

    const projects = projectList.map((p, index) => ({
        id: String(index + 1),
        ...p
    }));

    const itemPerPage = 3;
    const totalPages = Math.ceil(projects.length / itemPerPage);
    const currentProjects = projects.slice(
        (currentPage - 1) * itemPerPage,
        currentPage * itemPerPage
    );

    return (
        <div className="flex flex-col gap-8 p-4 w-full">
            {/* title */}
            <div className="flex items-center gap-4">
                <h1 className="font-mono font-bold">
                    Recent Projects
                </h1>
                <div className="w-24 md:w-48 lg:flex-1 h-px bg-white/20" />
            </div>

            <ScreenshotProjects />

            {/* pagination */}
            <div className="flex justify-end items-start gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`w-10 h-10 rounded-lg transition ${
                            currentPage === index + 1
                                ? "bg-cyan-500 text-white"
                                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {/* list of projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-6">
                {currentProjects.map((item) => (
                    <div
                        key={item.id}
                        className="overflow-hidden rounded-2xl bg-slate-800 shadow-lg hover:shadow-xl transition-all"
                    >
                        <div className="p-6">
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-block"
                            >
                                <h2 className="font-mono text-2xl font-bold text-white transition-colors group-hover:text-[#12AFEA]">
                                    {item.title}
                                </h2>
                            </a>

                            <div className="mt-3 flex flex-wrap gap-2 justify-center items-center">
                                {item.badges}
                            </div>

                            <p className="mt-5 text-gray-300 leading-7">
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* pagination */}
            <div className="flex justify-end items-start gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`w-10 h-10 rounded-lg transition ${
                            currentPage === index + 1
                                ? "bg-cyan-500 text-white"
                                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}