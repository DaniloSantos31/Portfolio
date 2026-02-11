import React, {useState, useEffect} from "react";
import { AArrowDown, Github, Linkedin, Mail }
from "lucide-react";
import {heroData} from '../data/hero';

const Hero = ({hasAnimated}) => {

    const [currentTextIndex, setCurrentTextIndex] =
    useState(0);
    const [currentText, setCurrentText] = useState
    ('');
    const [isDeleting, setDeleting] = useState
    (false);
    const [typingSpeed, setTypingSpeed] = useState
    (150);

    const { roles } = heroData;

    useEffect(() => {
        const currentRole = roles[currentTextIndex];
        if (!isDeleting) {
            if (currentText.length < currentRole.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, currentText.length +1));
                }, typingSpeed);
                return () => clearTimeout
                (timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(100);
                }, 2000);
                return () => clearTimeout
                (timeout);
            }
        } else {
            if (currentText.length > 0) {
                const timeout = setTimeout(()=> {
                    setCurrentText(currentText.slice(0, currentText.length - 1));
                }, typingSpeed);
                return clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setCurrentTextIndex((prev) =>
                (prev +1) % roles.length);
                setTypingSpeed(150);
            }
        }
    }, [currentText, currentTextIndex,
        isDeleting, typingSpeed, roles]);

        const scrollToAbout = () => {
            document.getElementById('about').
            scrollIntoView( { behavior: 'smooth'});
        };

        return (
            <section className="relative h-screen flex
            items-center justify-center
            overflow-hidden bg-gradient-to-br
            from-white via-gray-50 to-gray-100
            pt-20">
                {/**/}
                <div className="absolute inset-0
                overflow-hidden">
                    <divc className="absolute -top-40
                    -right-40 w-80 h-80
                    bg-gradient-to-br from-blue-400
                    to-purple-600 rounded-full
                    opacity-10 blur-3xl
                    animate-pulse"></divc>
                    <div className="absolute-bottom-40 -letf-40
                    w-80 h-80 bg-gradient-to-br from-green-400
                    to-blue-600 rounded-full
                    opacity-10 blur-3xl
                    animate-pulse delay-1000"></div>
                    <div className="absolute -top-1/2
                    left-1/2 transform -translate-x-1/2
                    -translate-y-1/2 w-96 h-96
                    bg-gradient-to-br from-pink-400
                    to-orange-600 rounded-full
                    opacity-5 blur-3xl animate-pulse
                    delay-500"></div>
                </div>
                <div className="absolute inset-0 bg-
                [linear-gradient(rgba(0.0.0.0.02)_1px,
                transparent_1px), linear-gradient(90deg,
                rgba(0.0.0.0.02)_1px, transparent_1px)]
                bg-[size:50px_50ox]"></div>

                <div className="relative z-10
                max-w-6xl mx-auto px-6 text-center
                h-full flex flex-col justify-center">
                    <div className={`transaction-all
                    duration-1000 ${hasAnimated.hero ?
                    'opacity-100 translate-y-0' :
                    'opacity-0 translate-y-10'}`}
                    id="hero">
                        <div className="mb-4">
                            <span className="inline-block
                            px-4 py-2 bg-black
                            text-white rounded-full
                            text-sm font-medium
                            animate-fade-in">
                                {heroData.greeting}
                            </span>
                        </div>

                        <h1 className="text-5xl
                        md:text-7xl font-bold mb-4
                        bg-gradient-to-r from-black
                        via-gray-800 to-gray-600
                        bg-clip-text text-transparent
                        animate-fade-in-up">
                            {heroData.name}
                            </h1>

                            <div className="h-12 md:h-16
                            mb-6 flex items-center
                            justify-center">
                                <h2 className="text-2xl
                                md:text-4xl font-semibold
                                text-gray-700">
                                    Eu sou {' '}
                                    <span className="relative">
                                        <span className="text-blue-600 font-bold">
                                            {currentText}
                                            <span className="animate-pulse ml-1">|</span>
                                        </span>
                                        <span className="absolute-bottom-1 left-0
                                        w-full h-0.5
                                        bg-linear-to-r
                                        from-blue-500
                                        to-purple-600"></span>
                                    </span>
                                </h2>
                            </div>

                            <p className="text-base md>text-lg
                            text-gray-600 mb-8
                            max-w-3xl mx-auto
                            leading-relaxed
                            animate-fade-in-up delay-200">
                                {heroData.description}
                            </p>

                            <div className="flex flex-col
                            sm:flex-row gap-3
                            justify-center mb-8
                            animate-fade-in-up
                            delay-300">
                                {heroData.ctaButtons.map
                                ((button, index) => (
                                    <a key={index} href=
                                    {button.href}
                                    className={`group
                                        relative px-5 py-2.5
                                        rounded-lg
                                        transition-all
                                        duration-300
                                        font-medium text-sm $
                                        {button.variant ===
                                        'primary' ? 'bg-black'
                                        'text-white' shadow-lg
                                        hover:shadow-xl
                                        hover:bg-gray-800' :
                                        border-2 border-black
                                        text-white
                                        hover:bg-black
                                        hover:text-while}`}>
                                            {button.variant ===
                                            'primary' && (
                                                <div className="absolute inset-0
                                                bg-linear-to-r
                                                from-blue-600
                                                to-purple-600
                                                rounded-lg
                                                opacity-0
                                                group-hover:opacity-100
                                                transition-opacity
                                                duration-300">
                                            </div>
                                            )}
                                            <span className={button.variant ===
                                                'primary' ? 'relative z-10' :
                                                ''
                                            }> {button.text}</span>
                                        </a>
                                ))}
                            </div>
                            <div className="flex justify-center space-x-6 mb-8
                            animate-fade-in-up delay-400">
                                {heroData.socialLinks.map
                                ((social, index) => {
                                    const IconComponent =
                                    social.icon === 'Github' ? Github :
                                    social.icon === 'Linkedin' ? Linkedin :
                                    social.icon === 'Mail' ? Mail : Mail;
                                    return (
                                        <a key={index}
                                        href={social.url}
                                        className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300
                                        transform hover:scale-100 hover:-translate-y-1">
                                            <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors"/>
                                        </a>
                                    );
                                })}
                            </div>

                            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-500">
                                {heroData.stats.map((stat, index) => (
                                    <div key={index} className="text=center">
                                        <div className="text-2xl font-bold text-black mb-1">
                                            {stat.number}
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="animate-bounce">
                                <button onClick={scrollToAbout}
                                className="group flex flex-col items-center text-gray-600 hover:text-black"></button>
                            </div>
                    </div>
                </div>
            </section>
        )

}

export default Hero;
