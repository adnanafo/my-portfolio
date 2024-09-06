// src/About.js
import React from 'react';

const About = () => {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold">About Me</h2>
            <img src="/path/to/your/image.jpg" alt="Your Name" className="rounded-full w-32 h-32 mt-4" />
            <p className="mt-4">I am a [Your Profession] with a passion for [Your Interests].</p>
        </div>
    );
};

export default About;
