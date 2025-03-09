export default function Templates() {
    const templates = [
        { id: 1, name: "Professional", category: "Business" },
        { id: 2, name: "Modern", category: "Creative" },
        { id: 3, name: "Minimalist", category: "General" },
        { id: 4, name: "Executive", category: "Leadership" },
    ];

    return (
        <div className='max-w-7xl mx-auto py-8 px-4'>
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                Resume Templates
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow'
                    >
                        <div className='h-48 bg-gray-200'></div>
                        <div className='p-6'>
                            <h3 className='text-xl font-semibold text-gray-900'>
                                {template.name}
                            </h3>
                            <p className='text-gray-600 mt-2'>
                                {template.category}
                            </p>
                            <button className='mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'>
                                Use Template
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
