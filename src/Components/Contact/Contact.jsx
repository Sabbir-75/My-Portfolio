'use client';
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import SpotlightCard from "../New/New";

export default function ContactWithMe() {
    return (
        <section id="Contact" className="text-white max-w-7xl mx-auto py-2 md:py-3 lg:py-6 xl:py-8">
            <h2 className="text-4xl font-bold text-center mb-3">Contact <span className="text-primary">With Me</span></h2>
            <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
                I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12">

                {/* Left Column - Profile Info */}
                <SpotlightCard>
                    <div className="flex flex-col text-start">
                        <img
                            src="https://i.ibb.co.com/KjjpB8Td/contact1.png"
                            alt="Profile"
                            className="w-full h-40 rounded-2xl object-cover shadow-md mb-6"
                        />
                        <h2 className="text-2xl font-bold text-white">Md. Sabbir Hossain</h2>
                        <p className="text-gray-200 font-medium mb-4">Frontend Web Developer</p>
                        <p className="text-gray-400 mb-6">
                            I’m passionate about building clean, user-friendly, and high-performance web applications that solve real-world problems.
                        </p>

                        <div className="w-full text-left space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-7">
                                    <Mail className="text-primary" />
                                </div>

                                <a href="mailto:youremail@example.com" className="text-white hover:underline">
                                    mdsabbirhossain9200@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-primary" />
                                <a href="tel:+880123456789" className="text-white hover:underline">
                                    +8801756750000
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="text-primary" />
                                <span className="text-white">Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>


                {/* Right Column - Contact Form */}
                <SpotlightCard>
                    <div className="text-start shadow-lg rounded-2xl">
                        <h3 className="text-3xl text-primary text-center font-bold mb-6">Get in Touch</h3>
                        <form className="space-y-5">
                            <div className=" w-full flex gap-2">
                                <div className="w-1/2">
                                    <label className="block text-white font-medium mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full bg-info rounded-lg px-4 py-2 focus:ring-[1px] focus:ring-primary focus:outline-none"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-white font-medium mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full bg-info rounded-lg px-4 py-2 focus:ring-[1px] focus:ring-primary focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-info rounded-lg px-4 py-2 focus:ring-[1px] focus:ring-primary focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-white font-medium mb-2">Your Message</label>
                                <textarea
                                    rows="3"
                                    placeholder="Write your message..."
                                    className="w-full rounded-lg bg-info px-4 py-2 focus:ring-[1px] focus:ring-primary focus:outline-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-primary hover:bg-[#ff365e] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </SpotlightCard>


            </div>
        </section>
    );
}
