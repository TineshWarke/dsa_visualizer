'use client'
import React from "react";

const Badge: React.FC = () => {
    return (
        <div className="">
            <div className="flex justify-center pb-4 w-[650px]">
                <h1 className="text-accent text-2xl font-bold">BADGES</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 p-8 border-accent border-4 w-[650px] rounded-badge">
                <div className="rounded-badge w-28 h-28 mx-auto bg-red-500 border-4 border-accent-content flex items-center justify-center">
                    <h1 className="text-accent-content text-2xl font-bold">Array</h1>
                </div>
                <div className="rounded-badge w-28 h-28 mx-auto bg-gray-500 border-4 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-2xl font-bold">Strings</h1>
                </div>
                <div className="rounded-badge w-28 h-28 mx-auto bg-gray-500 border-4 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-xl font-bold text-center break-words">Sorting Algorithms</h1>
                </div>
                <div className="rounded-badge w-28 h-28 mx-auto bg-gray-500 border-4 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-2xl font-bold">Sets</h1>
                </div>
                <div className="rounded-badge w-28 h-28 mx-auto bg-gray-500 border-4 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-2xl font-bold">Map</h1>
                </div>
                <div className="rounded-badge w-28 h-28 mx-auto bg-gray-500 border-4 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-2xl font-bold">Stack</h1>
                </div>
                <div className="rounded-badge w-28 h-28 mx-auto bg-gray-500 border-4 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-2xl font-bold">Queue</h1>
                </div>
                <div className="rounded-badge w-28 h-28 mx-auto bg-gray-500 border-4 border-white flex items-center justify-center">
                    <h1 className="text-gray-800 text-xl font-bold text-center break-words">Linked List</h1>
                </div>
            </div>
        </div>
    );
};

export default Badge;
