// src/pages/SignIn.jsx
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, githubProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

export default function SignIn() {
    const navigate = useNavigate();

    const handleSocialLogin = async (provider) => {
        try {
            await signInWithPopup(auth, provider);
            navigate("/");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    Sign in to your account
                </h2>
            </div>

            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <div className='flex flex-col space-y-4'>
                        <button
                            onClick={() => handleSocialLogin(googleProvider)}
                            className='w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
                        >
                            <FcGoogle className='h-5 w-5 mr-2' />
                            Continue with Google
                        </button>

                        <button
                            onClick={() => handleSocialLogin(githubProvider)}
                            className='w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
                        >
                            <AiFillGithub className='h-5 w-5 mr-2' />
                            Continue with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
