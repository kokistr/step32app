"use client";

import React from "react";
import { useState } from "react";
import {Header, CookingMenu} from "../components/Index" 

export default function Signup() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (

        <div className="flex flex-col items-center h-screen bg-white">
            {/* 背景画像セクション */}
            <div
                className="w-full h-52 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/Welcome.png')" }}
            >
            </div>

            {/* フォームセクション */}
            <div className="bg-white rounded-2xl shadow-md -mt-12 p-6 w-11/12 max-w-md">
                <h1 className="text-2xl font-bold text-orange-500 text-center mb-4">Sign Up</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Name"
                        value={formData.username}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                        type="submit"
                        className="py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition duration-200"
                    >
                        Join
                    </button>
                </form>
            </div>
            <a className="m-10 text-2xl text-blue-700" href="/top-menu">Top-Menu ページへ</a>
        </div>
    );
}
