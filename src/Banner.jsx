import { useState } from "react";

export default function Banner() {
    const urlEmail = import.meta.env.VITE_URL_EMAIL;
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
                    Software Developer with 5+ years of experience building and maintaining scalable web
                    applications using PHP, JavaScript, and MySQL. Proven track record developing RESTful APIs, integrating
                    third-party services and payment gateways, and delivering full-stack solutions on time in fast-paced
                    environments.
                </p>

                <div className="flex items-center justify-center md:justify-start gap-2 pt-4">
                    <a href={urlEmail}
                        className="font-poppins border-2 border-white text-white px-6 py-3 hover:bg-white hover:text-blue-600 transition"
                    >
                        Send Email
                    </a>
                </div>
            </div>
        </div>
    );
}