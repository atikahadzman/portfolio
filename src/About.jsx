import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function About() {
    const languageLabels = {
        1: "PHP",
        2: "HTML5",
        3: "CSS",
        4: "JSON",
        5: "JavaScript",
        6: "jQuery ",
        7: "AJAX",
    };

    const frameworkLabels = {
        1: "Laravel",
        2: "Yii Framework",
        3: "CodeIgniter",
        4: "React",
        5: "Bootstrap",
        6: "Angular",
        6: "Wordpress",
    };

    const databaseLabels = {
        1: "MySQL",
        2: "MongoDB",
    };
    
    const toolsLabels = {
        1: "Docker",
        2: "Git",
        3: "VSCode",
        4: "RESTful APIs",
        5: "Git",
    };
    
    const operatingSystemLabels = {
        1: "Linux (Ubuntu) via WSL",
        2: "Windows",
    };

    return (
        <div className="flex flex-col gap-8 p-4 w-full">
            {/* title */}
            <div className="flex items-center gap-4">
                <h1 className="font-poppins font-bold">
                    About me
                </h1>

                <div className="w-24 md:w-48 lg:flex-1 h-px bg-white/20" />
            </div>

            <div>
                <p className="text-white mb-6 mt-6 text-sm md:text-base font-poppins">
                    I am a Software Developer at IWS Intelligent Workflow Solution, where I work on adding new modules, bug fixing 
                    for both backend and front side using 
                    <span className="text-[#12AFEA] font-bold"> Linux via WSL</span> and 
                    <span className="text-[#12AFEA] font-bold"> Docker</span> environment.
                    Sometime, I work with integrating payment method too.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:items-start">
                <div className="flex flex-col gap-1 text-center md:text-left md:flex-1">
                    <p className="text-white text-left mb-6 mt-6 text-sm md:text-base font-poppins">
                        Here are some languages I have been working with:
                    </p>

                    {/* language */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {Object.values(languageLabels).map((label, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-secondary text-white group"
                            >
                                <HiOutlineChevronRight className="w-4 h-4 text-[#B7431A] group-hover:translate-x-1 transition-transform" />
                                <span className="text-sm">{label}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-white text-left mb-6 mt-6 text-sm md:text-base font-poppins">
                        Here are some technologies I have been working with:
                    </p>

                    {/* framework */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {Object.values(frameworkLabels).map((label, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-secondary text-white group"
                            >
                                <HiOutlineChevronRight className="w-4 h-4 text-[#B7431A] group-hover:translate-x-1 transition-transform" />
                                <span className="text-sm">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center md:justify-end shrink-0">
                    <img
                        src="/about.jpg"
                        alt="It's Me!"
                        className="h-100 w-full md:h-80 md:w-full object-cover rounded-lg"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}