import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className="flex items-center mt-36 mb-10 justify-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
            <h2 className='text-center mb-10'>Product is loading please wait it will take fue second</h2>

        </div>
    );
};

export default Spinner;
