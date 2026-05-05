import React, { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { heroData } from "../data/hero";

const Hero = ({ hasAnimated }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const { roles } = heroData;

    useEffect(() => {
    const currentRole = roles[currentTextIndex];

    if (!isDeleting) {
        if (currentText.length < currentRole.length) {
        const timeout = setTimeout(() => {
            setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
        } else {
        const timeout = setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(100);
        }, 2000);
        return () => clearTimeout(timeout);
        }
    } else {
        if (currentText.length > 0) {
        const timeout = setTimeout(() => {
            setCurrentText(currentText.slice(0, currentText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
        } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(150);
        }
    }
    }, [currentText, currentTextIndex, isDeleting, typingSpeed, roles]);

    const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
    });
    };

    return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm mb-4">
                {heroData.greeting}
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {heroData.name}
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-6">
                Eu sou{" "}
                <span className="text-blue-600 font-bold">
                {currentText}
                <span className="ml-1 animate-pulse">|</span>
                </span>
            </h2>

            <p className="text-gray-600 mb-8 max-w-xl">
                {heroData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center mb-8">
                {heroData.ctaButtons.map((button, index) => (
                <a
                    key={index}
                    href={button.href}
                    className={`px-5 py-3 rounded-lg font-medium transition ${
                    button.variant === "primary"
                        ? "bg-black text-white hover:bg-gray-800"
                        : "border border-black text-black hover:bg-black hover:text-white"
                    }`}
                >
                    {button.text}
                </a>
                ))}
            </div>

            <div className="flex md:justify-start justify-center gap-4 mb-8">
                {heroData.socialLinks.map((social, index) => {
                const Icon =
                    social.icon === "Github"
                    ? Github
                    : social.icon === "Linkedin"
                    ? Linkedin
                    : Mail;

                return (
                <a
                    key={index}
                    href={social.url}
                    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition"
                >
                    <Icon className="w-5 h-5" />
                </a>
                );
            })}
            </div>
            </div>

            <div className="flex-1 flex justify-center">
            <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

            <img
                src="/src/assets/DaniloFormatura.jpeg"
                alt="Danilo Santana"
                className="relative w-100 h-100 object-cover rounded-full shadow-2xl border-4 border-white"
            />
            </div>
        </div>
        </div>

        <div className="mt-16 flex justify-center">
        <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-600 hover:text-black transition"
        >
            <span className="text-sm mb-2 cursor-pointer">Saiba mais</span>
            <ArrowDown className="w-6 h-6 animate-bounce cursor-pointer" />
        </button>
        </div>
    </div>
    </section>
);
};

export default Hero;
