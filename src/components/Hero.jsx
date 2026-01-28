import React, {useState, useEffect} from "react";
import { AArrowDown, Github, Linkedin, Mail }
from "lucide-react";
import {herodata} from '../data/hero';

const hero = ({hasAnimated}) => {

    const [currentTextIndex, setCurrentTextIndex] =
    useState(0);
    const [currentText, setCurrentText] = useState
    ('');
    const [isDeleting, setDeleting] = useState
    (false);
    const [typingSpeed, setTypingSpeed] = useState
    (150);

    const { roles } = herodata;

    useEffect(() => {
        const currentRole = roles[currentTextIndex]
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
                    bg-linear-to-br from-blue-400
                    to-purple-600 rounded-full
                    opacity-10 blur-3xl
                    animate-pulse"></divc>
                    <div className="absolute-bottom-40 -letf-40
                    w-80 h-80 bg-linear-to-br from-green-400
                    to-blue-600 rounded-full
                    opacity-10 blur-3xl
                    animate-pulse delay-1000"></div>
                    <div className="absolute -top-1/2
                    left-1/2 transform -translate-x-1/2
                    -translate-y-1/2 w-96 h-96
                    bg-linear-to-br from-pink-400
                    to-orange-600 rounded-full
                    opacity-5 blur-3xl animate-pulse
                    delay-500"></div>

                </div>
            </section>
        )

}

export default Hero;
