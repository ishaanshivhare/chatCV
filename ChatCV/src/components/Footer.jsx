export default function Footer() {
    return (
        <footer className='bg-gray-800 text-white mt-12'>
            <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4 md:mb-0'>
                        <span className='text-xl font-bold'>ChatCV</span>
                    </div>
                    <div className='flex space-x-8'>
                        <a href='#' className='hover:text-blue-400'>
                            About
                        </a>
                        <a href='#' className='hover:text-blue-400'>
                            Privacy
                        </a>
                        <a href='#' className='hover:text-blue-400'>
                            Terms
                        </a>
                    </div>
                </div>
                <div className='mt-4 text-center md:text-left'>
                    <p className='text-gray-400'>
                        &copy; 2023 ChatCV. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
