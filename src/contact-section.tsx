import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .send(
                "service_2nlbucm", // Replace with your EmailJS service ID
                "template_b7s2trq", // Replace with your EmailJS template ID
                formData,
                "H0WHXE_cctZEw5nC6" // Replace with your EmailJS user ID
            )
            .then(
                () => {
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    setStatus("Failed to send message.");
                    console.error("Error:", error);
                }
            );
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700">Name</label>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700">Nachricht</label>
                    <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    Senden
                </button>
                {status && <p className="mt-4 text-sm text-gray-500 text-center">{status}</p>}
            </form>
        </div>
    );

};

export default ContactForm;
