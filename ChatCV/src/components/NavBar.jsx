import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function NavBar() {
    const { user } = useAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <nav className='bg-white shadow-lg'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between h-16'>
                    <div className='flex items-center'>
                        <Link
                            to='/'
                            className='text-2xl font-bold text-blue-600'
                        >
                            AI Resume Builder
                        </Link>
                    </div>

                    <div className='flex items-center space-x-8'>
                        {user ? (
                            <>
                                <Link
                                    to='/chat'
                                    className='text-gray-700 hover:text-blue-600'
                                >
                                    AI Chat
                                </Link>
                                <Link
                                    to='/templates'
                                    className='text-gray-700 hover:text-blue-600'
                                >
                                    Templates
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className='text-gray-700 hover:text-blue-600'
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to='/signin'
                                    className='text-gray-700 hover:text-blue-600'
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to='/signup'
                                    className='text-gray-700 hover:text-blue-600'
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
