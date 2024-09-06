// src/Contact.js
import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send an email or save to a database)
        alert(`Message sent from ${name}`);
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 w-full mb-4"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full mb-4"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border p-2 w-full mb-4"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
            </form>
        </div>
    );
};

export default Contact;
