import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; // Ensure these are imported

const ScreenshotProjects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
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
            id: 1,
            url: projectUrls.patientManagement,
            title: "Patient Management",
            image: "/patient-management.PNG",
        },
        {
            id: 2,
            url: projectUrls.ebook,
            title: "Ebook App",
            image: "/ebook.PNG",
        },
        {
            id: 3,
            url: projectUrls.chart,
            title: "Chart App",
            image: "/angular-chart.PNG",
        },
        {
            id: 4,
            url: projectUrls.electron,
            title: "Electron application using PouchDb",
            image: "/electron-chart.PNG",
        },
        {
            id: 5,
            url: projectUrls.ecommerceWeb,
            title: "Wordpress E-commerce website using WooCommerce",
            image: "/e-commerce.PNG",
        },
        {
            id: 6,
            url: projectUrls.portfolio,
            title: "Portfolio App",
            image: "/portfolio.PNG",
        },
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectList.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projectList.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <span className="text-white/60 italic">
                Some screenshots for better view ...
            </span>
            <div className="flex items-center justify-center w-full max-w-5xl mx-auto px-4 gap-4">
                <button
                    onClick={prevSlide}
                    className="p-2 hover:text-[#B7431A] text-white"
                    aria-label="Previous project"
                >
                    <HiChevronLeft size={24} />
                </button>
        
                <div className="relative flex-1 max-w-4xl h-96 overflow-hidden rounded-2xl shadow-lg">
                    <div
                        className="flex w-full h-full transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projectList.map((project, index) => (
                            <div key={index} className="w-full h-full flex-shrink-0 relative">
                                <img
                                    src={project.image}
                                    alt={project.title || `Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {project.title && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
        
                <button
                    onClick={nextSlide}
                    className="p-2 hover:text-[#B7431A] text-white"
                    aria-label="Next project"
                >
                    <HiChevronRight size={24} />
                </button>
            </div>
        </>
    );
};

export default ScreenshotProjects;
