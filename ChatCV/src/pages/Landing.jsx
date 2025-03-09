import { Link, Links } from "react-router-dom";
import {
    EnvelopeIcon,
    LinkIcon,
    BriefcaseIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/outline";

export default function Landing() {
    const teamMembers = [
        {
            name: "Ayush Aware",
            role: "Backend Developer",
            image: "https://placehold.co/400x400/3b82f6/ffffff?text=AA",
            social: {
                github: "#",
                linkedin: "#",
                portfolio: "#",
                email: "#",
            },
        },
        {
            name: "Aryan Rathore",
            role: "AI Developer",
            image: "https://placehold.co/400x400/3b82f6/ffffff?text=AR",
            social: {
                github: "#",
                linkedin: "#",
                portfolio: "#",
                email: "#",
            },
        },
        {
            name: "Anuraag Kumawat",
            role: "UI/UX Designer",
            image: "https://placehold.co/400x400/3b82f6/ffffff?text=AK",
            social: {
                github: "#",
                linkedin: "#",
                portfolio: "#",
                email: "#",
            },
        },
        {
            name: "Ishaan Shivhare",
            role: "Frontend Developer",
            image: "https://placehold.co/400x400/3b82f6/ffffff?text=IS",
            social: {
                github: "#",
                linkedin: "#",
                portfolio: "#",
                email: "#",
            },
        },
    ];

    // Add this Team section after the features grid in the return statement
    return (
        <div className='bg-gradient-to-b from-blue-50 to-white'>
            <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl'>
                        Build Your Perfect Resume with AI
                    </h1>
                    <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                        Create professional resumes in minutes using artificial
                        intelligence and proven templates
                    </p>
                    <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
                        <Link
                            to='/Chat'
                            className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                <div className='mt-32 grid gap-8 md:grid-cols-3 '>
                    {[
                        "AI-Powered Editing",
                        "Professional Templates",
                        "Real-time Feedback",
                    ].map((feature) => (
                        <div
                            key={feature}
                            className='bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow'
                        >
                            <h3 className='text-lg font-medium text-gray-900'>
                                {feature}
                            </h3>
                            <p className='mt-2 text-gray-500'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='max-w-7xl mx-auto pt-40 pb-16 px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
                        Meet Our Team
                    </h2>
                    <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500'>
                        The talented people behind AI Resume Builder
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow'
                        >
                            <img
                                className='w-32 h-32 rounded-full mx-auto object-cover mb-4 ring-4 ring-blue-100'
                                src={member.image}
                                alt={member.name}
                            />
                            <h3 className='text-xl font-semibold text-gray-900 text-center'>
                                {member.name}
                            </h3>
                            <p className='text-gray-600 text-center mb-4'>
                                {member.role}
                            </p>

                            <div className='flex justify-center space-x-4'>
                                <a
                                    href={member.social.github}
                                    className='text-gray-400 hover:text-blue-600 transition-colors'
                                >
                                    <CodeBracketIcon className='h-6 w-6' />
                                </a>
                                <a
                                    href={member.social.linkedin}
                                    className='text-gray-400 hover:text-blue-600 transition-colors'
                                >
                                    <BriefcaseIcon className='h-6 w-6' />
                                </a>
                                <a
                                    href={member.social.portfolio}
                                    className='text-gray-400 hover:text-blue-600 transition-colors'
                                >
                                    <LinkIcon className='h-6 w-6' />
                                </a>
                                <a
                                    href={member.social.email}
                                    className='text-gray-400 hover:text-blue-600 transition-colors'
                                >
                                    <EnvelopeIcon className='h-6 w-6' />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
