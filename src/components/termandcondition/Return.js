import React from 'react';

const Return = () => {
    return (
        <div className=" mt-20  ">
            <div className=" py-10 text-center text-gray-600 bg-gray-100 rounded-lg">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold ">
                       Returns and Refunds
                    </h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg mt-10">

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Returns</h2>
                <p className="text-lg text-gray-800 mb-8">
                Returns will only be accepted if accompanied by an unboxing video. The video must clearly demonstrate the condition of the package and its contents at the time of opening. This video serves as proof of any issues, such as damages, missing items, or incorrect products.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refunds</h2>
                <p className="text-lg text-gray-800 mb-8">
                Refunds are not available for any purchases.
                </p>

              
            </div>
        </div>
    );
};

export default Return;
