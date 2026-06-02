import React, { useEffect, useState } from "react";
import { HiAtSymbol, HiOutlineMinusSm, HiOutlineChevronRight } from "react-icons/hi"; 

export default function Experiences() {
    const [activeTab, setActiveTab] = useState("1");
    const tabs = [
        {
            id: "1",
            title: "IWS Intelligent",
            content: (
                <>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-0">
                        <span className="text-white">
                            Software Developer
                        </span>
                        <HiAtSymbol size={24} color="#fff" />
                        <span className="text-[#12AFEA]">
                            IWS Intelligent Workflow Solution Sdn. Bhd.
                        </span>
                    </h3>

                    <span className="flex items-center mb-4">
                        April 2021 <HiOutlineMinusSm size={24} color="#fff"/> present
                    </span>

                    <div className="space-y-4 text-left">
                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Built, maintained, and enhanced a high-traffic production trading platform across both frontend and backend.
                            </p>
                        </div>

                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Worked extensively on existing codebases to debug, refactor, and improve performance and stability.
                            </p>
                        </div>

                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Developed and optimized RESTful APIs and backend modules using PHP MVC frameworks.
                            </p>
                        </div>

                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Wrote and optimized MySQL queries including complex joins to support reporting and business logic.
                            </p>
                        </div>

                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Integrated third-party services and payment gateways (Pyrocharge), ensuring secure and reliable transaction flows.
                            </p>
                        </div>

                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Collaborated with cross-functional teams and external vendors for testing (SIT/UAT), deployments, and post-release support.
                            </p>
                        </div>

                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Applied secure development practices across all modules to meet performance and security standards.
                            </p>
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: "2",
            title: "Uniutama Solution",
            content: (
                <>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-0">
                        <span className="text-white">
                            Programmer
                        </span>
                        <HiAtSymbol size={24} color="#fff" />
                        <span className="text-[#12AFEA]">
                            Uniutama Solution Sdn. Bhd.
                        </span>
                    </h3>

                    <span className="flex items-center mb-4">
                        Dec 2019 <HiOutlineMinusSm size={24} color="#fff"/> April 2021 
                    </span>

                    <div className="space-y-4 text-left">
                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Developed and maintained web applications using PHP and MySQL, building system modules from requirement to deployment.
                            </p>
                        </div>

                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Wrote MySQL queries and managed relational database structures, hosting environments, and backups.
                            </p>
                        </div>

                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Ensured consistent delivery quality through hands-on testing and close collaboration with end users
                            </p>
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: "3",
            title: "MOS Neutraceutical",
            content: (
                <>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-0">
                        <span className="text-white">
                            System Admin/Programmer 
                        </span>
                        <HiAtSymbol size={24} color="#fff" />
                        <span className="text-[#12AFEA]">
                            MOS Neutraceutical Sdn. Bhd.
                        </span>
                    </h3>

                    <span className="flex items-center mb-4">
                        Jan 2018 <HiOutlineMinusSm size={24} color="#fff"/> Dec 2019
                    </span>

                    <div className="space-y-4 text-left">
                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Developed and maintained e-commerce platforms using PHP, WordPress, and WooCommerce on live production environments.
                            </p>
                        </div>

                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Managed MySQL databases, server configurations, domain management, and system integrations (SiteGiant marketplace).
                            </p>
                        </div>

                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Handled inventory system workflows and third-party SMS integrations to support business operations.
                            </p>
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: "4",
            title: "MIMOS Berhad",
            content: (
                <>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-0">
                        <span className="text-white">
                            Web Developer (SL1M Programme) 
                        </span>
                        <HiAtSymbol size={24} color="#fff" />
                        <span className="text-[#12AFEA]">
                            MIMOS Berhad
                        </span>
                    </h3>

                    <span className="flex items-center mb-4">
                        May 2017 <HiOutlineMinusSm size={24} color="#fff"/> Nov 2017
                    </span>

                    <div className="space-y-4 text-left">
                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Built RESTful APIs (full CRUD) and Single Page Applications using Angular 4 and SASS.
                            </p>
                        </div>

                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Implemented secure API communication using HTTP Interceptors and Google OAuth authentication.
                            </p>
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: "5",
            title: "PTJM",
            content: (
                <>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-0">
                        <span className="text-white">
                            Junior Programmer (Internship)
                        </span>
                        <HiAtSymbol size={24} color="#fff" />
                        <span className="text-[#12AFEA]">
                            Pejabat Tanah dan Jajahan Machang
                        </span>
                    </h3>

                    <span className="flex items-center mb-4">
                        Feb 2016 <HiOutlineMinusSm size={24} color="#fff"/> July 2016
                    </span>

                    <div className="space-y-4 text-left">
                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Developed internal web systems (e-File, e-Stock) using PHP, JavaScript, and CSS to streamline government administrative workflows.
                            </p>
                        </div>

                        <div className="flex gap-3 items-start">
                            <HiOutlineChevronRight className="w-10 h-6 text-[#B7431A]" />
                            <p className="text-body text-white leading-relaxed">
                                Improved data handling and process efficiency, contributing to a cleaner and more maintainable codebase.
                            </p>
                        </div>
                    </div>
                </>
            ),
        },
    ];

    const activeContent = tabs.find(
        (tab) => tab.id === activeTab
    )?.content;

    return (
        <div className="flex flex-col gap-8 p-4 w-full">
            {/* title */}
            <div className="flex items-center gap-4">
                <h1 className="font-poppins font-bold">
                    Experiences
                </h1>

                <div className="w-24 md:w-48 lg:flex-1 h-px bg-white/20" />
            </div>

            {/* tabs */}
            <div className="md:flex gap-8">
                <ul className="flex flex-col gap-3 md:w-64">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="font-poppins hover:bg-white/5 hover:translate-x-1 transition-all duration-200">
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 relative group overflow-hidden ${
                                    activeTab === tab.id
                                        ? "bg-brand text-white shadow-lg"
                                        : "bg-transparent hover:bg-neutral-secondary-soft"
                                }`}
                            >
                                <span
                                    className={`absolute right-0 top-0 h-full w-1 bg-white transition-opacity ${
                                        activeTab === tab.id ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                                    }`}
                                />

                                <span className="relative z-10">
                                    {tab.title}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="flex-1 bg-neutral-secondary text-body rounded-xl p-6 shadow-md border border-white/10 text-left">
                    {activeContent}
                </div>
            </div>
        </div>
    );
}