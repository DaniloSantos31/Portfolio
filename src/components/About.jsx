import React from "react";
import {Github, Linkedin, Mail, Code, Palette, Smartphone, ExternalLink} from "lucide-react";

const About = ({ hasAnimated }) => {
    const features = [
    {
        icon: <Code className="w-8 h-8 mb-4
        text-black" />,
        title: "Código limpo",
        description: "Escrevendo código manutensível, seguindo boas práticas de desenvolvimentos"
    },
    {
        icon: <Palette className="w-8 h-8 mb-4
        text-black" />,
        title: "UI/UX",
        description: "Criando design moderno e intuitivo"
    },
    {
        icon: <Smartphone className="w-8 h-8 mb-4
        text-black" />,
        title: "Arquitetura",
        description: "Procuro seguir uma organização segura e confiável"
    },
    {
        icon: <ExternalLink className="w-8 h-8 mb-4
        text-black" />,
        title: "Performance",
        description: "Desenvolvendo com carregamento e interação flúida"
    },
    ];

    return (
        <section id="about" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-200 $ {hasanimated.about ? 'opacity-100 translate-y-0' : 'opacity-0
                translate-y-10'}`}>
                    <h2 className="text-4xl
                    font-bold mb-12
                    text-center">Sobre mim</h2>
                    <div className="grid
                    md:grid-cols-2 gap-12
                    items-center">
                        <div>
                            <p className="text-lg
                            text-gray-700 mb-6">
                                Desenvolvedor de software com experiência em aplicações web,
                                APIs REST e soluções mobile, especializado em backend. Atuo na
                                construção de sistemas escaláveis e bem estruturados, com foco em performance,
                                qualidade de código e boas práticas. Tenho interesse em resolver problemas reais
                                através da tecnologia e estou em constante evolução para entregar soluções eficientes e de alto impacto.

                            </p>
                            <div className="flex space-x-4">
                                <Github
                                className="w-6 h-6
                                text-gray-600
                            hover:text-black cursor-pointer transition-colors"/>
                            <Linkedin
                            className="w-6 h-6
                                text-gray-600
                            hover:text-black cursor-pointer transition-colors"/>
                            <Mail
                            className="w-6 h-6
                                text-gray-600
                            hover:text-black cursor-pointer transition-colors"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index}
                                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    {feature.icon}
                                    <h3
                                    className="font-semibold mb-2">
                                        {feature.title}
                                    </h3>
                                    <p
                                    className="text gray-600 text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;