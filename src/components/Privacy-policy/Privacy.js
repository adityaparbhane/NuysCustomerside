import React from 'react';

const Privacy = () => {
    return (
        <div className=" mt-20  ">
            <div className=" py-10 text-center text-gray-600 bg-gray-100 rounded-lg">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold ">
                        Privacy Policy
                    </h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
                <p className="text-lg text-gray-800 mb-4">
                    When you visit our website or make a purchase, we may collect certain information about you, including:
                </p>
                <ul className="list-disc list-inside pl-5 text-lg text-gray-800 mb-8">
                    <li>
                        <strong>Personal Information:</strong> This may include your name, email address, shipping address, billing information, and contact details.
                    </li>
                    <li>
                        <strong>Transactional Information:</strong> Details about your purchases, payment methods, and other transactional details.
                    </li>
                    <li>
                        <strong>Device and Usage Information:</strong> We may collect information about your device, such as your IP address, browser type, operating system, and browsing behavior on our website.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
                <p className="text-lg text-gray-800 mb-4">
                    We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside pl-5 text-lg text-gray-800 mb-8">
                    <li>
                        <strong>Processing Orders:</strong> To fulfill your orders, process payments, and provide customer support.
                    </li>
                    <li>
                        <strong>Personalization:</strong> To personalize your shopping experience and recommend products that may interest you.
                    </li>
                    <li>
                        <strong>Communication:</strong> To communicate with you about your orders, promotions, new products, and updates related to our services.
                    </li>
                    <li>
                        <strong>Analytics:</strong> To analyze trends, track user behavior, and improve our website's performance and user experience.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
                <p className="text-lg text-gray-800 mb-8">
                    We take the security of your personal information seriously and implement appropriate measures to safeguard it. We use industry-standard encryption technologies to protect your data during transmission and storage. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
                <p className="text-lg text-gray-800 mb-8">
                    We may use third-party service providers to facilitate our services, such as payment processors and shipping companies. These service providers may have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-lg text-gray-800 mb-8">
                    We may use cookies and similar tracking technologies to enhance your browsing experience and gather information about how you interact with our website. You can control cookies through your browser settings, but please note that disabling cookies may affect the functionality of our website.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
                <p className="text-lg text-gray-800 mb-8">
                    You have certain rights regarding your personal information, including the right to access, correct, or delete the data we hold about you. If you have any questions or requests regarding your personal information, please contact us using the information provided below.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-lg text-gray-800 mb-8">
                    We reserve the right to update or change this Privacy Policy at any time. Any changes will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this Privacy Policy periodically for any updates or changes.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-lg text-gray-800 mb-8">
                    If you have any questions, concerns, or feedback regarding this Privacy Policy or our privacy practices, please contact us at [contact email/phone number].
                </p>

                <p className="text-lg text-gray-800">
                    Thank you for choosing Nyus!
                </p>
            </div>
        </div>
    );
};

export default Privacy;
