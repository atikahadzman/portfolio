import { useState } from "react";

export default function Banner() {
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
                <h1 className="text-3xl md:text-5xl font-bold">
                    Hi there, <span className="text-[#12AFEA]">Atikah</span> here
                </h1>

                <p className="text-white mb-6 mt-6 text-sm md:text-base">
                    Software Developer with 5+ years of experience building and maintaining scalable web
                    applications using PHP, JavaScript, and MySQL. Proven track record developing RESTful APIs, integrating
                    third-party services and payment gateways, and delivering full-stack solutions on time in fast-paced
                    environments.
                </p>

                <div className="flex justify-center md:justify-start">
                    
                    <a href="mailto:atikah.adzman@gmail.com"
                        className="border-2 border-white text-white px-6 py-3 hover:bg-white hover:text-blue-600 transition"
                    >
                        Send Email
                    </a>
                </div>
            </div>
        </div>
    );
}