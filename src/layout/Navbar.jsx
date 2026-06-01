import React, { useEffect, useState } from "react";

export default function Navbar() {
    return (
        <nav className="flex items-end">
            <div className="flex items-center gap-2">
                <span className="text-xl">
                    <img
                        src="/icons.svg"
                        alt="logo"
                        className="w-12 h-16"
                    />
                </span>
                <span className="font-semibold text-white text-lg">
                    Menu
                </span>
            </div>
        </nav>
    );
}