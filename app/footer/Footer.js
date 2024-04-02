import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="bg-gray-900 py-12 px-4 text-gray-200">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-semibold ">Artians' Mart</h1>
                <div className="flex gap-5 text-3xl my-5">
                    <FaFacebook/>
                    <FaInstagram />
                    <FaWhatsapp />
                </div>
                <h3 className="text-sm">Narinda, Sharatgupta road, Dhaka-100</h3>
            </div>

        </div>
    );
};

export default Footer;