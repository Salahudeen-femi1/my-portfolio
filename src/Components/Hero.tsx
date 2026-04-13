import { useEffect, useState } from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

export default function HeroCarousel() {
    const slides = [
        {
            image: assets.mainbg2,
            name: "Salahudeen",
            fullName: "Abdulazeez F.",
            role: "Frontend Engineer",
            layout: "left"
        },
        {
            image: assets.bg3,
            name: "Creative",
            fullName: "UI Developer",
            role: "Modern Interfaces",
            layout: "center"
        },
    ];

    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // 🔥 Auto slide
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <div
            className="w-screen h-screen relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-110"
                        }`}
                >
                    {/* Background */}
                    <img
                        src={slide.image}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Text */}
                    <div className="absolute bottom-55 md:top-60 left-15 md:left-40 text-white z-20">
                        <p className="font-medium text-[20px] md:text-[30px] animate-fadeInUp">
                            {slide.name}
                        </p>

                        <p className="font-semibold text-2xl md:text-4xl uppercase animate-fadeInUp delay-100">
                            {slide.fullName}
                        </p>

                        <p className="text-xs md:text-sm tracking-[5px] md:tracking-[10px] uppercase animate-fadeInUp delay-200">
                            {slide.role}
                        </p>

                        <div className="flex gap-3 mt-3 animate-fadeInUp delay-300">
                            <button className="rounded-full border border-white px-4 md:px-6 py-2">
                                Resume
                            </button>

                            <Link to="/portfolio" className="rounded-full border border-white px-4 md:px-6 py-2">
                                Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

            {/* Arrows */}
            {/* <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white text-2xl"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white text-2xl"
      >
        ›
      </button> */}

            {/* Dots */}
            <div className="absolute bottom-6 w-full flex justify-center gap-2 z-30">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition ${i === current ? "bg-white scale-110" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}