import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const posts = [
    {
        id: 1,
        title: "Install Wordpress in WSL Ubuntu",
        excerpt: "Starting a Wordpress project in WSL Ubuntu.",
        category: "Development",
        date: "June 24, 2026",
        isFeatured: true,
        url: "/wordpress"
    },
];

export default function List() {
    return (
        <div className="bg-[#0F172A] py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* posts grid */}
                <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {posts.map((post) => (
                        <article 
                            key={post.id} 
                            className="flex flex-col rounded-xl shadow-sm overflow-hidden border border-white/20 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white-900 hover:text-indigo-600">
                                        <a href={post.url}>
                                            {post.title}
                                        </a>
                                    </h3> 
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 mb-3">
                                        {post.category}
                                    </span>
                                    <div className="w-full lg:flex-1 h-px bg-white/20" />
                                    <p className="mt-3 text-sm text-white line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="ml-3">
                                        <p className="text-xs text-white">{post.date}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
