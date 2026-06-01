import { useState } from "react";

export default function Banner() {
    return (
        <div className="flex flex-row gap-4 p-4">
            <div className="shrink-0">
                <img
                    src="/avatar-1.jpg"
                    alt="It's Me!"
                    className="h-80 w-64 rounded-4xl"
                    loading="lazy"
                />
            </div>

            <div className="flex flex-col gap-1">
                <h1 className="text-5xl font-bold">
                    Hi there, <span className="text-[#12AFEA]"> Atikah</span> here
                </h1>

                <p className="text-white mb-6 mt-6">
                    Software Developer with 5+ years of experience building and maintaining scalable web
                    applications using PHP, JavaScript, and MySQL. Proven track record developing RESTful APIs, integrating
                    third-party services and payment gateways, and delivering full-stack solutions on time in fast-paced
                    environments.
                </p>

                <div className="flex justify-center">
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