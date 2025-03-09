import { Link } from "react-router-dom";
import {
    ChatBubbleLeftIcon,
    DocumentTextIcon,
    HomeIcon,
} from "@heroicons/react/24/outline";

export default function NavBar() {
    return (
        <nav className='bg-white shadow-lg'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between h-16'>
                    <div className='flex items-center'>
                        <span className='text-2xl font-bold text-blue-600'>
                            ChatCV
                        </span>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <Link
                            to='/'
                            className='flex items-center text-gray-700 hover:text-blue-600'
                        >
                            <HomeIcon className='h-5 w-5 mr-1' />
                            Home
                        </Link>
                        <Link
                            to='/chat'
                            className='flex items-center text-gray-700 hover:text-blue-600'
                        >
                            <ChatBubbleLeftIcon className='h-5 w-5 mr-1' />
                            AI Chat
                        </Link>
                        <Link
                            to='/templates'
                            className='flex items-center text-gray-700 hover:text-blue-600'
                        >
                            <DocumentTextIcon className='h-5 w-5 mr-1' />
                            Templates
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
